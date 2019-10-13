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
  }

  enum Make {
    WAYMO
    APPLE
    TESLA
    MITSUBISHI
    HONDA
    TOYOTA
    FORD
    GM
  }

  enum AutonomyLevel {
    NONE
    DRIVER_ASSISTANCE
    PARTIAL_ASSISTANCE
    HIGH_AUTOMATION
    FULL_AUTOMATION
  }

  enum AutomobileType {
    CAR
    MOTORBIKE
    BUS
    TRUCK
  }

  enum RailVehicleType {
    TRAIN
    TRAM
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

  enum VehicleMode {
    CONVENTIONAL
    AUTONOMOUS
  }

  type Sensor {
    type: String
    description: String
    vehicles: [Vehicle]
  },

  type Vehicle {
    id: Int
    type: AutomobileType
    registration: String
    vin: String
    make: Make
    model: String
    yearOfManufacture: Int
    countryOfManufacture: Country
    autonomyLevel: AutonomyLevel
    sensors: [Sensor]
    incidents: [Incident]
  },


  type Incident {
    id: Int
    timestamp: Int
    latitude: Float
    longitude: Float
    numVehicles: Int
    damageSeverity: String
    description: String
    vehicles: [Vehicle]
    dca: Int
    weatherDesc: String
    mode: VehicleMode
  }

  input SensorInput {
    type: String
    description: String
  }

  input VehicleInput {
    type: AutomobileType
    registration: String
    vin: String
    make: Make
    model: String
    yearOfManufacture: Int
    countryOfManufacture: Country
    autonomyLevel: AutonomyLevel
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
