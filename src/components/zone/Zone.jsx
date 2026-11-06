
import { useContext, useState } from "react";
import { TimeZoneContext } from "../../context/TimeZoneContext";
import { Country, City } from "country-state-city";
import tzlookup from "tz-lookup";

const Zone = () => {

    const { setTimeZone } = useContext(TimeZoneContext);

    const countries = Country.getAllCountries();

    const [selectedCountry, setSelectedCountry] = useState("DE");
    const [selectedCity, setSelectedCity] = useState("");

    const cities = City.getCitiesOfCountry(selectedCountry) || [];

    // Land ändern
    const handleCountryChange = (e) => {
        const countryCode = e.target.value;

        setSelectedCountry(countryCode);
        setSelectedCity("");

        // Erste verfügbare Zeitzone des Landes als Standard
        const country = countries.find(
            (country) => country.isoCode === countryCode
        );

        if (country?.timezones?.length > 0) {
            setTimeZone(country.timezones[0].zoneName);
        }
    };

    // Stadt ändern
    const handleCityChange = (e) => {
        const cityIndex = e.target.value;

        setSelectedCity(cityIndex);

        if (cityIndex === "") return;

        const city = cities[Number(cityIndex)];

        if (city?.latitude && city?.longitude) {
            const zone = tzlookup(
                Number(city.latitude),
                Number(city.longitude)
            );

            setTimeZone(zone);
        }
    };

    return (
        <div className="zone">

            {/* Länderauswahl */}
            <select
                value={selectedCountry}
                onChange={handleCountryChange}
            >
                {countries.map((country) => (
                    <option
                        key={country.isoCode}
                        value={country.isoCode}
                    >
                        {country.flag} {country.name}
                    </option>
                ))}
            </select>

            {/* Stadtauswahl */}
            <select
                value={selectedCity}
                onChange={handleCityChange}
            >
                {cities.length > 0 ? (
                    <>
                        <option value="">Stadt auswählen</option>

                        {cities.map((city, index) => (
                            <option
                                key={`${city.name}-${index}`}
                                value={index}
                            >
                                {city.name}
                            </option>
                        ))}
                    </>
                ) : (
                    <option value="">N/A</option>
                )}
            </select>

        </div>
    );
};

export default Zone;
