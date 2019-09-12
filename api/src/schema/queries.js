import types from "./types";
export default `
  type Query {
    categories: [Category!],
    locations(categoryId: Int): [Category!]
  }
`;

// type Query {
//   getEvents(timerange: Timerange): [Event]
//   getVehicle: Vehicle
// }
