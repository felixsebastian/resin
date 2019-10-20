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
      description: { label: "Notes", type: "string" },
      dca: { label: "DCA", type: "number" }
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
