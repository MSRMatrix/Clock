import { useState } from "react";
import Layout from "./components/layout/Layout";
import { ClockDataContext } from "./context/ClockDataContext";
import { TimeZoneContext } from "./context/TimeZoneContext";

function App() {
  const [timeZone, setTimeZone] = useState("Europe/Berlin");
  const [clockData, setClockData] = useState(null);

  return (
    <>
      <ClockDataContext.Provider value={{ clockData, setClockData }}>
        <TimeZoneContext.Provider value={{ timeZone, setTimeZone }}>
          <Layout />
        </TimeZoneContext.Provider>
      </ClockDataContext.Provider>
    </>
  );
}

export default App;
