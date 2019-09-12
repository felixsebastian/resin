import types from "./types";
export default `
  type Mutation {
    addCategory(categoryName: String): [Category!]
  }
`;

// type Mutation {
//   createEvent(input: EventInput): Event
//   createVehicle(input: VehicleInput): Vehicle
//   }
// }
