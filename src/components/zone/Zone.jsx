import { useContext } from "react";
import { countries } from "../../data/countries";
import { TimeZoneContext } from "../../context/TimeZoneContext";

const Zone = () => {

    const {timeZone, setTimeZone} = useContext(TimeZoneContext);


    return (
        <div className="zone">
            <select value={timeZone} onChange={(e) => setTimeZone(e.target.value)}>
        {countries.map((country) => (
          <option key={country.timeZone} value={country.timeZone}>
            {country.flag} {country.name}
          </option>
        ))}
      </select>
        </div>
    )
};

export default Zone;