export  function getClockData(timeZone) {
    const now = new Date();

    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      milliseconds: now.getMilliseconds(),

      day: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear(),
      weekday: now.getDay(),

      timestamp: now.getTime(),
      timezoneOffset: now.getTimezoneOffset(),

      date: now.toLocaleDateString("de-DE", {
        timeZone: timeZone,
      }),

      time: now.toLocaleTimeString("de-DE", {
        timeZone: timeZone,
      }),
    };
  }