import types from "./types";
export default `
  type Mutation {
    createIncident(event: IncidentInput!): [Incident!]

    deleteAllIncidents: [Incident!]
  }
`;
