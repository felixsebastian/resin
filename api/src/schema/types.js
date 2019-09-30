export default `

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
  },

  enum Make {
    FORD
    TOYOTA
    HONDA
    VOLKSWAGEN
    BMW
  },

  enum AutonomyLevel {
    NONE
    DRIVER_ASSISTANCE
    PARTIAL_ASSISTANCE
    HIGH_AUTOMATION
    FULL_AUTOMATION
  },

  enum AutomobileType {
    CAR
    MOTORBIKE
    BUS
    TRUCK
  },

  enum RailVehicleType {
    TRAIN
    TRAM
  },

  enum HumanPoweredVehicleType {
    BICYCLE
    TRICYCLE
    VELOMOBILE
    SKATEBOARD
    SCOOTER
    RICKSHAW
    WHEELCHAIR
  },

  enum VehicleMode {
    CONVENTIONAL
    AUTONOMOUS
  },

  type Sensor {
    name: String
    description: String
  },

  type Automobile {
    type: AutomobileType
    registration: String
    vin: String
    make: Make
    model: String
    yearOfManufacture: Int
    countryOfManufacture: Country
    autonomyLevel: AutonomyLevel
    sensors: [Sensor]
  },

  type RailVehicle {
    type: RailVehicleType
  },

  type HumanPoweredVehicle {
    type: HumanPoweredVehicleType
  },

  union Vehicle = Automobile | RailVehicle | HumanPoweredVehicle

  type Incident {
    id: Int
    timestamp: Int
    latitude: Float
    longitude: Float
    numVehicles: Int
    damageSeverity: String
    description: String
    vehicle1: Vehicle
    vehicle2: Vehicle
    dca: Int
    weatherDesc: String
    mode: VehicleMode
  },

  input SensorInput {
    name: String
    description: String
  },

  input AutomobileInput {
    type: AutomobileType
    registration: String
    vin: String
    make: Make
    model: String
    yearOfManufacture: Int
    countryOfManufacture: Country
    autonomyLevel: AutonomyLevel
    sensors: [SensorInput]
  },
  input RailVehicleInput {
    type: RailVehicleType
  },
  input HumanPoweredVehicleInput {
    type: HumanPoweredVehicleType
  },
  
  input IncidentInput {
      timestamp: Int
      latitude: Float
      longitude: Float
      numVehicles: Int
      damageSeverity: String
      description: String
      vehicle1: Int
      vehicle2: Int
      dca: Int
      weatherDesc: String
      mode: VehicleMode
  }
`;
