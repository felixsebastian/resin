export default `
  type Vehicle {
    id: Int
    type: AutomobileType
    registration: String
    vin: String
    make: String
    model: String
    oem: String
    yearOfManufacture: Int
    countryOfManufacture: String
    autonomyLevel: AutonomyLevel
    sensors: [Sensor]
    incidents: [Incident]
  }
`;
