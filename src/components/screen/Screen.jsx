import { useContext, useEffect } from "react";
import { getClockData } from "../../utils/getClockData";
import { TimeZoneContext } from "../../context/TimeZoneContext";
import { ClockDataContext } from "../../context/ClockDataContext";

const Screen = () => {

  const {timeZone} = useContext(TimeZoneContext);
  const {clockData, setClockData} = useContext(ClockDataContext);

  
  useEffect(() => {
    const updateClock = () => {
      setClockData(getClockData(timeZone));
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div className="screen">
      <h1>{clockData?.time}</h1>
      <p>{clockData?.date}</p>
      <p>{timeZone.replace("/", " ")}</p>
    </div>
  );
};

export default Screen;
