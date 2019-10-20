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
    countryOfManufacture: Country
    autonomyLevel: AutonomyLevel
    sensors: [Sensor]
    incidents: [Incident]
  }
`;
