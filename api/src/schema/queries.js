export default `
  type Query {
    incidents(filters: [FilterInput]): [Incident!]
    vehicles: [Vehicle!]
    sensors: [Sensor!]
    correlate(filters: [FilterInput], options: ChartOptionsInput): [Chart!]
  }
`;

// incidents(filters: Filter): [Incident!]
// getVehicle(rego: String!) : Vehicle
// sensors: [Sensor!],

// incidentsByRect(p1: Location!, p2: Location!, filters: Filter): [Incident],
// incidentsByRadius(p: Location!, radius: Float!, filters: Filter): [Incident]
