export default `
  type Query {
    incidents: [Incident!]
    vehicles: [Vehicle!]
    getVehicle(rego: String!) : Vehicle
    sensors: [Sensor!],
    incidentsByRect(p1: Point!, p2: Point!, filters: Filter): [Incident],
    incidentsByRadius(p: Point!, filters: Filter): [Incident]
  }
`;
