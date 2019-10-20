export default `
  type Query {
    incidents(filters: FiltersInput): [Incident!]
  }
`;

// incidents(filters: Filter): [Incident!]
// vehicles: [Vehicle!]
// getVehicle(rego: String!) : Vehicle
// sensors: [Sensor!],
// incidentsByRect(p1: Location!, p2: Location!, filters: Filter): [Incident],
// incidentsByRadius(p: Location!, radius: Float!, filters: Filter): [Incident]
