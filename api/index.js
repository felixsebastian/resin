const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  enum Make {
    FORD
    TOYOTA
    HONDA
    VOLKSWAGEN
    BMW
  }

  enum AutonomyLevel {
    NONE
    DRIVER_ASSISTANCE
    PARTIAL_ASSISTANCE
    CONDITIONAL_ASSISTANCE
    HIGH_AUTOMATION
    FULL_AUTOMATION
  }

  enum Country {
    JAPAN
    SOUTH_KOREA
    USA
    GERMANY
    UK
    CHINA
    RUSSIA
    INDIA
    SPAIN
    BRAZIL
    MEXICO
    FRANCE
    IRAN
    CZECH_REPUBLIC
    TURKEY
    SLOVAKIA
    INDONESIA
    THAILAND
    CANADA
    ITALY
    MALAYSIA
  }

  enum AutomobileType {
    CAR
    MOTORBIKE
    BUS
    TRUCK
  }

  type Automobile {
    type: AutomobileType
    registration: String
    vin: String
    make: Make
    model: String
    yearOfManufacture: Int
    countryOfManufacture: Country
    autonomyLevel: AutonomyLevel
  }

  enum RailVehicleType {
    TRAIN
    TRAM
  }

  type RailVehicle {
    type: RailVehicleType
  }

  enum HumanPoweredVehicleType {
    BICYCLE
    TRICYCLE
    VELOMOBILE
    SKATEBOARD
    SCOOTER
    RICKSHAW
    WHEELCHAIR
  }

  type HumanPoweredVehicle {
    type: HumanPoweredVehicleType
  }

  union Vehicle = Automobile | RailVehicle | HumanPoweredVehicle

  type Event {
    type: String
    time: Int
    latitude: Float
    longitude: Float
    severity: Int
    damagedVehicles: [Vehicle]
    otherVehicles: [Vehicle]
    crashSpeed: Int
  }

  input Timerange {
    start: Int
    end: Int
  }

  input EventInput {
    type: String
    time: Int
    latitude: Float
    longitude: Float
    severity: Int
    crashSpeed: Int
  }

  # type Mutation {
  # createEvent(input: EventInput): Event
  # createVehicle(input: VehicleInput): Vehicle
  # }

  type Query {
    getEvents(timerange: Timerange): [Event]
    getVehicle: Vehicle
  }
`;

const events = [
  {
    id: "abc123",
    time: 1234567,
    latitude: 123.456,
    longitude: 123.457,
    type: "crash",
    damagedVehicles: ["kfdafda"]
  }
];

const vehicles = [
  {
    id: "kfdafda",
    make: "FORD",
    model: "FIESTA"
  }
];

const resolvers = {
  Query: {
    getEvents: (parent, args, context, info) =>
      events
        .filter(
          event =>
            event.time > args.timerange.start && event.time < args.timerange.end
        )
        .map(event => ({
          ...event,
          ...event.map(vehicleId =>
            vehicles.find(vehicle => vehicle.id === vehicleId)
          )
        }))
  },
  Vehicle: {
    __resolveType(obj, context, info) {
      return "Automobile";
    }
  },
  Automobile: {}
  // Mutation: {
  //   createEvent: (parent, args) => {
  //     event = {
  //       id: "kjfdaldafjl",
  //       ...args.input
  //     };
  //     events.push(event);
  //     return event;
  //   },
  //   createVehicle: (parent, args) => {}
  // }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
