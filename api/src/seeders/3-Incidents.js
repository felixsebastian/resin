"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Incidents",
      [
        {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750687",
    "longitude": "-122.432641",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1434286300,
    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.746813",
    "longitude": "-122.439956",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1510280800,
    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.751514",
    "longitude": "-122.435849",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1558763300,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.751368",
    "longitude": "-122.435138",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1427347000,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "NONE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.751003",
    "longitude": "-122.436303",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1489019900,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.751104",
    "longitude": "-122.433802",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1461958100,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.747895",
    "longitude": "-122.436792",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1484050800,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.749658",
    "longitude": "-122.432106",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1520460600,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.751587",
    "longitude": "-122.435624",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1517489700,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.749875",
    "longitude": "-122.437124",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1452691800,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.748842",
    "longitude": "-122.440285",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1429405300,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.751145",
    "longitude": "-122.437497",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1489118000,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750262",
    "longitude": "-122.438911",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1462962500,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.747325",
    "longitude": "-122.440466",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1551103500,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.746868",
    "longitude": "-122.437010",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1462115500,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MAJOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.747896",
    "longitude": "-122.435698",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1486245200,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.749757",
    "longitude": "-122.436241",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1503989000,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750212",
    "longitude": "-122.432265",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1507152200,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.748769",
    "longitude": "-122.434951",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1496457900,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MAJOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.749431",
    "longitude": "-122.440314",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1508415100,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.749986",
    "longitude": "-122.433486",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1546380500,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750322",
    "longitude": "-122.435113",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1516898000,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MAJOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.749456",
    "longitude": "-122.440841",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1430252400,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.751492",
    "longitude": "-122.436203",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1483900700,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "NONE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.749413",
    "longitude": "-122.437787",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1563018900,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.748494",
    "longitude": "-122.437502",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1550152600,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "NONE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.749922",
    "longitude": "-122.437886",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1470220000,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "NONE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750506",
    "longitude": "-122.434374",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1487063700,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.747578",
    "longitude": "-122.438814",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1527777900,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.747175",
    "longitude": "-122.432546",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1472707900,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750769",
    "longitude": "-122.437326",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1480105600,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "NONE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.747709",
    "longitude": "-122.433411",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1544615000,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MAJOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750674",
    "longitude": "-122.439651",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1454373600,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "NONE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750466",
    "longitude": "-122.435070",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1486253100,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "NONE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.747806",
    "longitude": "-122.432724",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1503198600,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.748956",
    "longitude": "-122.432422",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1553966400,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750373",
    "longitude": "-122.432720",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1515778300,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.748465",
    "longitude": "-122.438992",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1486010100,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MAJOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.746916",
    "longitude": "-122.437154",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1470688600,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750629",
    "longitude": "-122.436759",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1530340100,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750772",
    "longitude": "-122.439779",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1515980400,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.749605",
    "longitude": "-122.435218",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1506515900,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "NONE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.747292",
    "longitude": "-122.440264",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1529103900,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750835",
    "longitude": "-122.440131",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1443781600,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750868",
    "longitude": "-122.434755",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1568526700,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.748495",
    "longitude": "-122.432984",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1443448900,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.747675",
    "longitude": "-122.439583",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1481649800,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750919",
    "longitude": "-122.434683",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1463978000,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.749614",
    "longitude": "-122.435119",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1542158100,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "NONE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.751670",
    "longitude": "-122.438718",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1480241500,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.749943",
    "longitude": "-122.435219",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1543763900,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750138",
    "longitude": "-122.440767",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1442237100,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750130",
    "longitude": "-122.432998",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1432440600,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750525",
    "longitude": "-122.434068",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1479578800,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.751075",
    "longitude": "-122.439294",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1449510300,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.752002",
    "longitude": "-122.434787",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1552608700,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MAJOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750179",
    "longitude": "-122.434528",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1428114700,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "NONE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.746843",
    "longitude": "-122.436081",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1527101400,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.747841",
    "longitude": "-122.439359",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1553001100,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.746747",
    "longitude": "-122.436170",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1451505300,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.751266",
    "longitude": "-122.440697",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1564104500,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.751102",
    "longitude": "-122.437220",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1554989500,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.751399",
    "longitude": "-122.432216",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1481561700,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MAJOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.752187",
    "longitude": "-122.432706",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1542036900,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MAJOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.751311",
    "longitude": "-122.433677",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1567957200,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.749954",
    "longitude": "-122.439981",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1561357800,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MAJOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.747334",
    "longitude": "-122.433089",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1475197200,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MAJOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750625",
    "longitude": "-122.432853",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1548654400,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750935",
    "longitude": "-122.439228",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1506703900,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.751066",
    "longitude": "-122.439540",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1518615600,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "NONE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.749159",
    "longitude": "-122.440449",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1473627800,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750254",
    "longitude": "-122.440457",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1535389100,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.752057",
    "longitude": "-122.434309",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1426382400,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MAJOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.748233",
    "longitude": "-122.434883",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1480793000,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.747136",
    "longitude": "-122.434597",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1499107600,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "NONE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750095",
    "longitude": "-122.436675",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1486300800,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.752070",
    "longitude": "-122.435988",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1566541100,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MAJOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.748545",
    "longitude": "-122.439220",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1423176200,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "NONE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.747518",
    "longitude": "-122.434279",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1550260800,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750366",
    "longitude": "-122.435772",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1469090800,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "NONE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.749306",
    "longitude": "-122.438277",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1542458300,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750680",
    "longitude": "-122.433411",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1534004900,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.749196",
    "longitude": "-122.437559",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1511331200,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.747772",
    "longitude": "-122.440507",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1472486800,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.752000",
    "longitude": "-122.434671",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1443001800,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750056",
    "longitude": "-122.439493",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1540220900,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.748676",
    "longitude": "-122.440712",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1456319000,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MAJOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.751761",
    "longitude": "-122.439419",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1495943600,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750829",
    "longitude": "-122.437444",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1462991700,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MAJOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.749983",
    "longitude": "-122.435249",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1450662900,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750173",
    "longitude": "-122.437402",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1567547000,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MAJOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750365",
    "longitude": "-122.435404",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1464923500,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MAJOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.748593",
    "longitude": "-122.437655",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1482206500,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.752180",
    "longitude": "-122.432661",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1556595700,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MAJOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.748294",
    "longitude": "-122.437106",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1508817700,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "UNKNOWN",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.747069",
    "longitude": "-122.432806",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1460716500,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.748987",
    "longitude": "-122.433487",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1510785000,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MODERATE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.746900",
    "longitude": "-122.439419",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1543475500,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "MINOR",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.747130",
    "longitude": "-122.433817",
    "mode": "AUTONOMOUS",
    "numVehicles": 2,
    "timestamp": 1532214900,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}, {
    "damageSeverity": "NONE",
    "dca": 1,
    "description": "Lorem ipsum dolor sit amet.",
    "latitude": "37.750883",
    "longitude": "-122.439219",
    "mode": "CONVENTIONAL",
    "numVehicles": 2,
    "timestamp": 1507610300,

    "weatherDesc": "This will be deprecated with weather api",
    "createdAt": new Date(),
    "updatedAt": new Date()
}
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Incidents", null, {});
  }
};