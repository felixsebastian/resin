export default `
  type Query {
    incidents: [Incident!]
    vehicles: [Vehicle!]
    getVehicle(rego: String!) : Vehicle
    sensors: [Sensor!],
    incidentsByRect(p1: PointInput!, p2: PointInput!, filters: FilterInput): [Incident],
    incidentsByRadius(p: PointInput!, radius: Float!, filters: FilterInput): [Incident]
  }
`;
