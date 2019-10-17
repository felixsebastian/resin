import types from "./types";
export default `
  type Mutation {
    createIncident(event: IncidentInput!): [Incident!]
    deleteAllIncidents: [Incident!]
    
    createVehicle(vehicle: VehicleInput!): [Vehicle!]
    deleteAllVehicles: [Incident!]

    createVehicleSensorAssociation(ass: VehicleSensorInput!): [Vehicle!]
    createIncidentVehicleAssociation(ass: IncidentVehicleInput!): [Incident!]

    createSensor(sensor: SensorInput!): [Sensor!]
    deleteAllSensors: [Sensor!] 
  }
`;
