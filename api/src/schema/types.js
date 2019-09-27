export default `
  type Category {
    id: ID
    name: String
  }
  
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

  type Incident {
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

  input IncidentInput {
    type: String!
    time: Int!
    latitude: Float!
    longitude: Float!
    severity: Int!
    crashSpeed: Int!
  }
`;
