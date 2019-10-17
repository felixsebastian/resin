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
    make: String
    model: String
    oem: String
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
    mode: VehicleMode

    streetType: String
    speedLimit: Int
    schoolZone: Boolean
  }

  enum StreetType {
    ST
    ALY
    AVE
    CT
    WAY
    TER
    BLVD
    RAMP
    PL
    LN
    LOOP
    DR
    RD
    CIR
    WALK
    PARK
    ROW
    PATH
    TERR
    HWY
    EXPY
    HL
    PLZ
    STPS
    STWY
    LANE
    TUNL
  }

  type Street {
    schoolZone: Boolean
    type: StreetType
    speedLimit: Int
  }

  type Point {
    lat: Float,
    long: Float
  },

  input PointInput {
    lat: Float
    long: Float
  },

  input FilterInput {
    timestamp: RangedFilterInput,
    numVehicles: RangedFilterInput
    damageSeverity: [String]
    hourOfDay: RangedFilterInput
    make: [String]
    model: [String]
    oem: [String]
    streetType: [String]
    speedLimit: RangedFilterInput
    schoolZone: Boolean
    dca: [Int]
    mode: String
  },

  input RangedFilterInput {
    exact: Int
    lower: Int
    upper: Int
  },

  input SensorInput {
    type: String
    description: String
  },

  input VehicleSensorInput {
    vehicleId: Int
    sensorType: String
  }

  input IncidentVehicleInput {
    incidentId: Int
    vehicleId: Int
  }

  input VehicleInput {
    type: AutomobileType
    registration: String
    vin: String
    make: String
    model: String
    oem: String
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
      dca: Int
      weatherDesc: String
      mode: VehicleMode
  }
`;
