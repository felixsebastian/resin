export default `
  type Incident {
    id: Int
    timestamp: Int
    location: Location
    numVehicles: Int
    damageSeverity: String
    description: String
    vehicles: [Vehicle]
    dca: Int
    mode: VehicleMode
    streetType: StreetType
    speedLimit: Int
    schoolZone: Boolean
  }
`;
