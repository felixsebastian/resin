export default `
  type Query {
    incidents: [Incident!]
    vehicles: [Vehicle!]
    getVehicle(rego: String!) : Vehicle!
    sensors: [Sensor!]
  }
`;
