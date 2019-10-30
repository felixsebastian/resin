import time from "../lib/views/time";
import location from "../lib/views/location";

export default {
  incident: {
    heading: "Incident",
    fields: {
      timestamp: { label: "Time", view: time, type: "time" },
      location: {
        label: "Location",
        view: location,
        type: "location",
        hide: true
      },
      numVehicles: { label: "Vehicle count", type: "number" },
      damageSeverity: { label: "Damage", type: "string" },
      speedLimit: { label: "Speed limit", type: "number" },
      description: { label: "Notes", type: "string" },
      dca: { label: "DCA", type: "number" },
      mode: { label: "Mode", type: "string" },
      apparentTemperature: { label: "Feels like", type: "number" },
      cloudCover: { label: "Clouds", type: "number" },
      dewPoint: { label: "Dew point", type: "number" },
      humidity: { label: "Humidity", type: "number" },
      ozone: { label: "Ozone", type: "number" },
      precipIntensity: { label: "Precip level", type: "number" },
      precipProbability: { label: "Precip chance", type: "number" },
      precipType: { label: "Precip type", type: "string" },
      pressure: { label: "Pressure", type: "number" },
      summary: { label: "Summary", type: "string" },
      temperature: { label: "Temparature", type: "number" },
      uvIndex: { label: "UV Index", type: "number" },
      visibility: { label: "Visibility", type: "number" },
      windBearing: { label: "Wind bearing", type: "number" },
      windGust: { label: "Wind gust", type: "number" },
      windSpeed: { label: "Wind speed", type: "number" }
    }
  },
  vehicle: {
    heading: "Vehicle",
    fields: {
      type: { label: "Type" },
      registration: { label: "Registration" },
      vin: { label: "VIN" },
      make: { label: "Make" },
      model: { label: "Model" },
      yearOfManufacture: { label: "Year" },
      countryOfManufacture: { label: "Country" },
      autonomyLevel: { label: "Autonomy level" },
      sensors: { label: "Type" }
    }
  }
};
