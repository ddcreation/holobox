export interface WeatherResponse {
  description: string;
  days: WeatherDTO[];
  alerts: {
    event: string;
    description: string;
  }[];
  currentConditions: WeatherDTO;
}

export interface WeatherDTO {
  datetime: string;
  temp: number;
  feelslike: number;
  icon: string;
  hours: {
    datetime: string;
  }[];
}

/*
{
  "latitude" : 38.9697,
  "longitude" : -77.385,
  "resolvedAddress" : "Reston, VA, United States",
  "address" : " Reston,VA",
  "timezone" : "America/New_York",
  "tzoffset" : -5,
  "description":"Cooling down with a chance of rain on Friday.",
  "days" : [{ //array of days of weather data objects
      "datetime":"2020-11-12",
      "datetimeEpoch":1605157200,
      "temp" : 59.6,
      "feelslike" : 59.6,
      ...
      "stations" : {
      },
      "source" : "obs",
      "hours" : [{  //array of hours of weather data objects
          "datetime" : "01:00:00",
          ...
      },...]
  },...],
  "alerts" : [{
          "event" : "Flash Flood Watch",
          "description" : "...",
          ...
      }
  ],
  "currentConditions" : {
      "datetime" : "2020-11-11T22:48:35",
      "datetimeEpoch" : 160515291500,
      "temp" : 67.9,
      ...
  }
}
*/
