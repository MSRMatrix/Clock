import { useState, useEffect } from "react";
import { getClockData } from "../../utils/getClockData";
import { countries } from "../../data/countries"

const Screen = () => {
  const [timeZone, setTimeZone] = useState("Europe/Berlin");
  const [clockData, setClockData] = useState(null);

  useEffect(() => {
    const updateClock = () => {
      setClockData(getClockData(timeZone));
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <>
      <h1>{clockData?.time}</h1>
      <p>{clockData?.date}</p>
      <p>{timeZone.replace("/", " ")}</p>

      <select value={timeZone} onChange={(e) => setTimeZone(e.target.value)}>
        {countries.map((country) => (
          <option key={country.timeZone} value={country.timeZone}>
            {country.flag} {country.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Screen;
