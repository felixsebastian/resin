export default `
  input IncidentInput {
    timestamp: Int
    latitude: Float
    longitude: Float
    numVehicles: Int
    damageSeverity: String
    description: String
    dca: Int
    weatherDesc: String
    mode: VehicleMode
  }
`;
