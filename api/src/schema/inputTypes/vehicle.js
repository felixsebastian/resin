export default `
  input VehicleInput {
    type: AutomobileType
    registration: String
    vin: String
    make: String
    model: String
    oem: String
    yearOfManufacture: Int
    countryOfManufacture: Country
    autonomyLevel: AutonomyLevel
  }
`;
