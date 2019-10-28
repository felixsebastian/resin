"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "IncidentsVehicles",
        [
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 108,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.719676554761,
            "longitude": -122.46649022097351
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1569505800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 199,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76997475051463,
            "longitude": -122.40403234151313
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1425622600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 139,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.715956772106985,
            "longitude": -122.40821553729793
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1561789000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 139,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.72361230371301,
            "longitude": -122.46227313059974
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1557044400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 147,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.72364876599503,
            "longitude": -122.45716378132744
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1461229500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 144,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75668772277975,
            "longitude": -122.40271456933695
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1511665100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 159,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.736420564870244,
            "longitude": -122.4982144500416
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1485130800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 133,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79455882823866,
            "longitude": -122.41980005861903
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1544993400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 160,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79108987275856,
            "longitude": -122.40193333269964
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "ST",
        "timestamp": 1548884000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 118,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.719245761466475,
            "longitude": -122.43974215548843
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1513804600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 170,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74981116270926,
            "longitude": -122.44167284580239
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1531648000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 125,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76578941132657,
            "longitude": -122.43439864453724
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1449063500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 193,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78195582920373,
            "longitude": -122.42906796141416
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1542584800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 131,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.768709796527894,
            "longitude": -122.45017218519297
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1487653300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 189,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78700164822491,
            "longitude": -122.41825735290557
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1526468200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 194,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.7201191057222,
            "longitude": -122.42971415185818
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "AVE",
        "timestamp": 1551185300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 139,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.784136728754085,
            "longitude": -122.45185189005967
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1538304800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 143,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.749292183394516,
            "longitude": -122.44147292183868
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1555078600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 135,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73546552059598,
            "longitude": -122.39566694014559
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "LN",
        "timestamp": 1439541600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 106,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.72860772815937,
            "longitude": -122.42358787325614
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1424273700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 135,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.746143342209585,
            "longitude": -122.44011983753566
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "BLVD",
        "timestamp": 1460293700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 150,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.739400203298416,
            "longitude": -122.38980619258635
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1470727400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 136,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.804360382997025,
            "longitude": -122.43709268251398
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1432241500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 123,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.728484792583615,
            "longitude": -122.39301050110379
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1494095700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 159,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.710822806291205,
            "longitude": -122.39978546971294
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1507068900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 143,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79977542550491,
            "longitude": -122.41144222651027
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ALY",
        "timestamp": 1449320800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 112,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73555214780688,
            "longitude": -122.50252181887367
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 35,
        "streetType": "BLVD",
        "timestamp": 1493068100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 174,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74118682991439,
            "longitude": -122.448438970961
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "DR",
        "timestamp": 1549267100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 151,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74242469383661,
            "longitude": -122.46239298907551
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "WAY",
        "timestamp": 1521212200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 149,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.80453953208527,
            "longitude": -122.41656584755891
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1460602600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 180,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.80407490999797,
            "longitude": -122.41813578615715
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1435340300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 159,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73384543826913,
            "longitude": -122.47195289268814
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "DR",
        "timestamp": 1521559200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 151,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.713831837068334,
            "longitude": -122.4352912642416
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1510710000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 170,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78811088430147,
            "longitude": -122.48688820858004
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "",
        "timestamp": 1471278400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 109,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71795771212414,
            "longitude": -122.45026008569997
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1510830700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 153,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75151729109717,
            "longitude": -122.49514354840443
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "BLVD",
        "timestamp": 1492993900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 190,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75453962539262,
            "longitude": -122.43440721149483
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1499448300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 137,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.721484194701844,
            "longitude": -122.39992434493183
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 65,
        "streetType": "RAMP",
        "timestamp": 1457964300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 114,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73604705638658,
            "longitude": -122.37464393678702
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1536907500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 100,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77135442529958,
            "longitude": -122.41350154929626
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1500367600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 131,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74760301956195,
            "longitude": -122.50187693773559
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1426335000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 122,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.713400954817914,
            "longitude": -122.43450724005471
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1458291300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 181,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.798351856808786,
            "longitude": -122.43398880459948
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1541291500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 193,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76268589909795,
            "longitude": -122.39661478599233
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1500403500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 172,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.72873941699744,
            "longitude": -122.4602144555244
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "WAY",
        "timestamp": 1565513400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 125,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.80350034972275,
            "longitude": -122.47568594911517
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1469258800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 169,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.7528686970907,
            "longitude": -122.43462297087636
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1563853100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 130,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78625681368045,
            "longitude": -122.44672477094113
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "AVE",
        "timestamp": 1443849300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 122,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.720014234137345,
            "longitude": -122.47574074790187
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "DR",
        "timestamp": 1538513400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 125,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76300836051671,
            "longitude": -122.45189101564745
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1554052600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 109,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.733811407511716,
            "longitude": -122.44846514644924
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1512543500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 133,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.72537475285539,
            "longitude": -122.40765647532852
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1568959500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 131,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.718574597255056,
            "longitude": -122.40489594086502
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1441525600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 190,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76190090317976,
            "longitude": -122.40799061555717
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1518751000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 115,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.80126173417964,
            "longitude": -122.47757272195174
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "BLVD",
        "timestamp": 1512093500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 129,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77531257511502,
            "longitude": -122.46520634439683
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1521982900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 192,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75120733278669,
            "longitude": -122.50311522709103
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1486337500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 115,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76185140904407,
            "longitude": -122.46926878802196
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1501609100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 152,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74265004145746,
            "longitude": -122.38790339284387
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1441540200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 172,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.7380076173469,
            "longitude": -122.3951384826991
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1487099700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 198,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.728998740070914,
            "longitude": -122.46806698775217
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1539261700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 112,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.749321744528835,
            "longitude": -122.43964546284614
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1447562900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 124,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76581338747796,
            "longitude": -122.3968527965306
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1475426500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 144,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74445620873673,
            "longitude": -122.41891118894914
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "LN",
        "timestamp": 1491060400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 145,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74684207734372,
            "longitude": -122.45036027186663
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "DR",
        "timestamp": 1471214600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 198,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73643208403267,
            "longitude": -122.40952427113416
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "",
        "timestamp": 1568272000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 175,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76570372313767,
            "longitude": -122.43555347045829
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1470141400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 193,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76708568356631,
            "longitude": -122.41274785914479
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1515044600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 153,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73591363711751,
            "longitude": -122.42308110282842
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1439608000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 114,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.72968522817217,
            "longitude": -122.44885034187277
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1444489500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 173,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74757014379485,
            "longitude": -122.46439115392113
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1524636700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 121,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77312865577579,
            "longitude": -122.40612969609823
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1459610600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 191,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78877403162613,
            "longitude": -122.45707447790332
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1519537200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 165,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.777745253042205,
            "longitude": -122.44786213443355
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "TER",
        "timestamp": 1431089000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 103,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74678317311212,
            "longitude": -122.5075916058619
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "HWY",
        "timestamp": 1545759800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 104,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.785772683765394,
            "longitude": -122.48501186617428
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1490216300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 110,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.765717959513815,
            "longitude": -122.41868011988252
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1458961300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 198,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71400497375797,
            "longitude": -122.45178154417381
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1530748700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 174,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.790095166994114,
            "longitude": -122.41684590362615
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "ST",
        "timestamp": 1509285500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 110,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.767006173896704,
            "longitude": -122.41384303927975
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1524670700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 181,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.7876140156343,
            "longitude": -122.45373826043107
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1515361700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 105,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77109248419855,
            "longitude": -122.45382900628361
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1429824400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 198,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.746520952710405,
            "longitude": -122.38805836717155
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1531116500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 175,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77733642256035,
            "longitude": -122.4586384735728
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1439414000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 102,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76654367816723,
            "longitude": -122.43944644829263
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1486274900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 193,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77115206846867,
            "longitude": -122.44473937010834
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1549945100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 166,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.72600293897171,
            "longitude": -122.42444121516317
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1507689700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 104,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.745582461673266,
            "longitude": -122.50361243556472
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1556540600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 132,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74064798958809,
            "longitude": -122.46522774300644
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1491687800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 152,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.795677093758314,
            "longitude": -122.40166301084629
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1513975200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 164,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77518681785115,
            "longitude": -122.41927829592068
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1519395400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 165,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.749471985792894,
            "longitude": -122.50058941212038
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1425470900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 111,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74438796248887,
            "longitude": -122.40581909012462
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1559364000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 116,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.7992320416329,
            "longitude": -122.41428257745739
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1476335700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 133,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74340356177193,
            "longitude": -122.39635459333292
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1443700100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 141,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71197631460045,
            "longitude": -122.4514773204182
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "WAY",
        "timestamp": 1461760300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 193,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75559528125292,
            "longitude": -122.39574421905138
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "WAY",
        "timestamp": 1533525600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 132,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77709438702586,
            "longitude": -122.40734739091545
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1490650100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 133,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.726141638138486,
            "longitude": -122.42015272277702
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1567509200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 154,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79190573497559,
            "longitude": -122.40215410502461
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "PL",
        "timestamp": 1517830800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 169,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74521136647037,
            "longitude": -122.41169275924234
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1430875500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 145,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.8019312590217,
            "longitude": -122.41287570579335
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1558559200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 132,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.753728191818404,
            "longitude": -122.42024900599195
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1445492700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 130,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78175138012108,
            "longitude": -122.49119102812712
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1551264300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 135,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73447095877332,
            "longitude": -122.37943720674674
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "RD",
        "timestamp": 1475158700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 101,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73570510561075,
            "longitude": -122.46425925414387
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1452644200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 112,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.780557569180516,
            "longitude": -122.4166986015143
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1535100900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 121,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.72932800967715,
            "longitude": -122.42709004003491
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1424474500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 172,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77789378341959,
            "longitude": -122.43009296702195
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1457937800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 182,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.80173652308448,
            "longitude": -122.406508529269
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1474024600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 123,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71054953453816,
            "longitude": -122.39655322965928
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1483838900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 181,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.791525333591295,
            "longitude": -122.41066540543187
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1492689900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 133,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.730494840998055,
            "longitude": -122.43124503638661
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 35,
        "streetType": "BLVD",
        "timestamp": 1530328800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 174,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.749028429008206,
            "longitude": -122.46636500345635
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1500556800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 103,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78146068639059,
            "longitude": -122.45413311969962
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1439977000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 139,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73428428107865,
            "longitude": -122.48322386118835
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 35,
        "streetType": "BLVD",
        "timestamp": 1437707800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 125,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75400187695076,
            "longitude": -122.44975672165715
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "WAY",
        "timestamp": 1437579400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 180,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74565678218753,
            "longitude": -122.43387439059468
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1442978200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 148,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78734616460122,
            "longitude": -122.42998103990912
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1436506300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 180,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.70949334162713,
            "longitude": -122.46162871247861
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1502654900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 146,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.805655687570145,
            "longitude": -122.41527313103474
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1520410600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 140,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73342244271875,
            "longitude": -122.39427166105015
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1511678000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 144,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.718806284431466,
            "longitude": -122.39883257545262
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 35,
        "streetType": "BLVD",
        "timestamp": 1525286900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 175,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73466161141324,
            "longitude": -122.38301975974048
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1442830800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 118,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.70961988221603,
            "longitude": -122.46520548148708
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1558102700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 152,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76456298345907,
            "longitude": -122.49659739119313
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "WAY",
        "timestamp": 1481783800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 166,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73607866609245,
            "longitude": -122.46489995802995
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1562536700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 174,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.7441633341795,
            "longitude": -122.42250361168827
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "AVE",
        "timestamp": 1488740000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 135,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75635833331573,
            "longitude": -122.44023836554574
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1508063700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 132,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78491700414437,
            "longitude": -122.44820570287206
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1516456300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 125,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.711920890424956,
            "longitude": -122.4432266066013
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1438350100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 101,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.734759588841726,
            "longitude": -122.40188914602902
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1524556100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 115,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78987328124027,
            "longitude": -122.3990716938961
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1442378300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 124,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73528817871178,
            "longitude": -122.42742144762394
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1449831200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 152,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77276355545264,
            "longitude": -122.41706835695634
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1556515900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 132,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75114646243909,
            "longitude": -122.50395196153218
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1548747200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 116,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71542376780198,
            "longitude": -122.41406276577182
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "AVE",
        "timestamp": 1442502800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 131,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71229235376527,
            "longitude": -122.45900780586707
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1424974100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 131,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.797927178717934,
            "longitude": -122.42813976339887
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1500176000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 147,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.72146296397173,
            "longitude": -122.39992473269665
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 65,
        "streetType": "RAMP",
        "timestamp": 1568372500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 116,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77373573314841,
            "longitude": -122.4391296767534
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1497171700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 117,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73410727813416,
            "longitude": -122.39836169335099
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1564200600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 149,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71838476018316,
            "longitude": -122.4032777159243
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1494116200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 129,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.729917397482325,
            "longitude": -122.40488836478852
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1459838700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 109,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78214292367264,
            "longitude": -122.39330433702901
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "",
        "timestamp": 1460837300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 105,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.72371467144335,
            "longitude": -122.40351829415573
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1479893100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 179,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77725786351168,
            "longitude": -122.50716630476097
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1452695200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 131,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76213762486195,
            "longitude": -122.50928765576172
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1462329800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 183,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73729819672145,
            "longitude": -122.43122518880314
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1560279500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 190,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73550419419002,
            "longitude": -122.43843161549651
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1462042200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 194,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75853722623677,
            "longitude": -122.49180366386013
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1445607400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 105,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78670162274892,
            "longitude": -122.46431331059284
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1524560800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 162,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79388754521226,
            "longitude": -122.44839594504067
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "BLVD",
        "timestamp": 1457304200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 133,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.80551200039581,
            "longitude": -122.4372267952745
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1501317600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 190,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73868374398562,
            "longitude": -122.49019099937365
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1523646000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 121,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.786668933736976,
            "longitude": -122.43541137217898
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "ST",
        "timestamp": 1490286500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 143,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73480145339956,
            "longitude": -122.43559790068872
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1520234400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 101,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78253717529423,
            "longitude": -122.43928161272451
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1503141000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 154,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73461946374681,
            "longitude": -122.46439940664108
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "WAY",
        "timestamp": 1519733600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 123,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.794802148016856,
            "longitude": -122.44593307890791
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1531381600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 104,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.731158616516645,
            "longitude": -122.43089357072262
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1564975600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 164,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.790732996539646,
            "longitude": -122.4588240494663
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "BLVD",
        "timestamp": 1452524100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 172,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73761536586033,
            "longitude": -122.40725176185475
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 65,
        "streetType": "RAMP",
        "timestamp": 1506882700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 146,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.7316914329892,
            "longitude": -122.41945901372623
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 65,
        "streetType": "RAMP",
        "timestamp": 1477225200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 109,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.755271000206875,
            "longitude": -122.49536325552437
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "BLVD",
        "timestamp": 1567877100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 133,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.787883088393464,
            "longitude": -122.43496635164311
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "ST",
        "timestamp": 1440732600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 109,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79190373952782,
            "longitude": -122.43963854871662
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1511609900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 189,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76827951842393,
            "longitude": -122.41992157511694
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1515911500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 166,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77568064031647,
            "longitude": -122.40290738859188
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1542843200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 170,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78822302779686,
            "longitude": -122.39275157667247
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "PL",
        "timestamp": 1511021200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 151,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71405861848175,
            "longitude": -122.45788658305045
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1554721500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 145,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78903468866993,
            "longitude": -122.3966659502973
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1528127900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 140,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.7730831873073,
            "longitude": -122.42721185328496
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1472558200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 146,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.769562676794294,
            "longitude": -122.40771414945799
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 65,
        "streetType": "",
        "timestamp": 1506748600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 170,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78687796675952,
            "longitude": -122.4585064129073
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1507341900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 179,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.757449493780946,
            "longitude": -122.48826948944384
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1425416400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 109,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.736780305836874,
            "longitude": -122.40849655101796
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "BLVD",
        "timestamp": 1504197500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 149,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74663848666138,
            "longitude": -122.44963764912681
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "BLVD",
        "timestamp": 1482808600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 134,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76814618656318,
            "longitude": -122.42901851318668
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1561458500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 101,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.8028293785216,
            "longitude": -122.40583426765834
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "BLVD",
        "timestamp": 1421535400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 129,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73699373956373,
            "longitude": -122.45991355812666
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1510373300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 131,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71971136270433,
            "longitude": -122.47516065369837
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 35,
        "streetType": "AVE",
        "timestamp": 1537021900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 183,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75950186425168,
            "longitude": -122.46600389806585
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1532300100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 175,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71012282206972,
            "longitude": -122.46255943715354
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1431331700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 134,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75048647913911,
            "longitude": -122.4205710890202
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1462410500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 181,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74754192100572,
            "longitude": -122.42989368191793
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1420937100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 199,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.735592027815635,
            "longitude": -122.43829256303364
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1462805800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 122,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77608364716431,
            "longitude": -122.48932635487478
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1455596100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 134,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.782116207503066,
            "longitude": -122.39198848179652
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1461752800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 189,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.735660822530825,
            "longitude": -122.38870483345029
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1568468900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 101,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.734542269687765,
            "longitude": -122.43456302690262
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1539514900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 184,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77562576215795,
            "longitude": -122.50701481953965
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1421865400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 145,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.72873937396538,
            "longitude": -122.46028808492717
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "WAY",
        "timestamp": 1463941500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 182,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.788516867151465,
            "longitude": -122.41180581097339
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ALY",
        "timestamp": 1567059300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 122,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.730401251182165,
            "longitude": -122.46058921281391
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "BLVD",
        "timestamp": 1513777400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 189,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74140542592954,
            "longitude": -122.46450301274926
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "BLVD",
        "timestamp": 1458165500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 136,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75353498111804,
            "longitude": -122.46926658691216
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1557711500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 101,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.72364535920139,
            "longitude": -122.46079811834123
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "AVE",
        "timestamp": 1433566600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 181,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73412974376141,
            "longitude": -122.4137398323308
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1489548500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 115,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71020124157494,
            "longitude": -122.39124868295538
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 40,
        "streetType": "WAY",
        "timestamp": 1545799000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 170,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.750658497130935,
            "longitude": -122.4034997717211
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 65,
        "streetType": "RAMP",
        "timestamp": 1423226500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 194,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.790705308600536,
            "longitude": -122.45882731542548
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "",
        "timestamp": 1551617300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 160,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.731575287588626,
            "longitude": -122.39982956926502
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1499319300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 131,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75513115618717,
            "longitude": -122.46052992033123
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "WAY",
        "timestamp": 1557882400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 144,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79482149053396,
            "longitude": -122.40900926916805
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1548266900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 191,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75287729310193,
            "longitude": -122.46442078180422
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1516657400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 115,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.80436812972588,
            "longitude": -122.44601789342444
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1533764600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 141,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75386104951289,
            "longitude": -122.48280204038367
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1545670000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 174,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76237990427495,
            "longitude": -122.39963528051099
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1537375300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 183,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.734234253619015,
            "longitude": -122.49227642982524
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1485136400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 172,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79665009021908,
            "longitude": -122.41056725788471
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ALY",
        "timestamp": 1500630100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 114,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79578841149347,
            "longitude": -122.43365622807914
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1568280800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 129,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71397959664945,
            "longitude": -122.45170097592774
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1495292100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 182,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.784271583569236,
            "longitude": -122.42640717590989
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "CT",
        "timestamp": 1516987300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 159,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.741539820387196,
            "longitude": -122.4107247391508
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1562676900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 163,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.7583638826457,
            "longitude": -122.45439874890573
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1493335200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 164,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.757180427985205,
            "longitude": -122.39993241166438
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1500988900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 180,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.787136260409746,
            "longitude": -122.44022741618036
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1470217700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 116,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.72834652789959,
            "longitude": -122.50240043407358
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 45,
        "streetType": "BLVD",
        "timestamp": 1430723300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 121,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77277405716734,
            "longitude": -122.43395109708541
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1429251100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 124,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.782543442375484,
            "longitude": -122.41626377127567
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1436834800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 120,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75348637526217,
            "longitude": -122.42421987518762
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1426282500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 114,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.751349877540996,
            "longitude": -122.43368157301803
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1480639800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 181,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78433419835048,
            "longitude": -122.4633591828413
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1490190300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 180,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79054865035261,
            "longitude": -122.44101030594592
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1445752500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 110,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79505784917669,
            "longitude": -122.46932603372306
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "BLVD",
        "timestamp": 1541203800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 163,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.776627383410265,
            "longitude": -122.48343390262978
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1558219600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 198,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.727786258770216,
            "longitude": -122.46733268137535
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1452307500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 193,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.721534669837844,
            "longitude": -122.43509367493577
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1513703900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 141,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.716196286747945,
            "longitude": -122.38349913223732
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1541086800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 108,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.753449773108095,
            "longitude": -122.45554180324558
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 35,
        "streetType": "AVE",
        "timestamp": 1556028800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 192,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.754859416868,
            "longitude": -122.50547300167145
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1552321000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 184,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.802150157444636,
            "longitude": -122.40329002638477
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1521694200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 135,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75882830421557,
            "longitude": -122.44102993176026
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "LN",
        "timestamp": 1521398300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 101,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.759512915053826,
            "longitude": -122.40401723677962
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1476987100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 140,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.795524818411145,
            "longitude": -122.4109655503793
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1467596200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 147,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78406507382457,
            "longitude": -122.45308107343948
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1486726500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 116,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78909592352673,
            "longitude": -122.40525850565356
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1435940100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 180,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75353317421761,
            "longitude": -122.43877789677221
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1517152600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 184,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.752688781196106,
            "longitude": -122.45708379441797
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "CIR",
        "timestamp": 1452002900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 133,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.788608592301536,
            "longitude": -122.42823865032429
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "ST",
        "timestamp": 1469315100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 153,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71487774504968,
            "longitude": -122.43776340389716
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1524574000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 129,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.734553762462355,
            "longitude": -122.44532576313259
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1427215200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 137,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75407818859023,
            "longitude": -122.48014329996803
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1568298200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 101,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.80182678243782,
            "longitude": -122.42887352327016
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1449478000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 106,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.755829061512706,
            "longitude": -122.41241676699458
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1427547000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 160,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74869376067833,
            "longitude": -122.43621708107426
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1490853500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 137,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.777154350900396,
            "longitude": -122.46599277102361
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1508664100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 105,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79108954990484,
            "longitude": -122.40540991184027
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1466748600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 130,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.7481072798001,
            "longitude": -122.46695997929487
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1506567100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 112,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74630699313013,
            "longitude": -122.4874278568605
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1494486100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 173,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74898761074767,
            "longitude": -122.44152436412463
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1486767900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 141,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.766257374502764,
            "longitude": -122.4265429390576
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1441367100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 199,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77692860284374,
            "longitude": -122.47050881483912
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1500098700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 117,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.734485448119365,
            "longitude": -122.38877403832736
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1464861000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 189,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79229504114612,
            "longitude": -122.40188039067463
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1482223800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 170,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.776483586659985,
            "longitude": -122.41199052639826
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1457473200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 139,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71916484569543,
            "longitude": -122.47236644512881
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 40,
        "streetType": "BLVD",
        "timestamp": 1461120600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 105,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.754909501132026,
            "longitude": -122.47102211122504
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1435524600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 153,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.743658025453705,
            "longitude": -122.41025022016463
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1446584500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 103,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.758855662617755,
            "longitude": -122.43583964844491
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1474206200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 149,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75312499224074,
            "longitude": -122.40369348787611
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1493092400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 182,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77855252854935,
            "longitude": -122.47698999976853
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1550089900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 159,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.745721034013215,
            "longitude": -122.40669712335196
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1556610800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 123,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.740434311144384,
            "longitude": -122.50236388594892
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1496192300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 111,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73227610765089,
            "longitude": -122.38450411598474
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "CT",
        "timestamp": 1479752400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 124,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77564475080542,
            "longitude": -122.44813714522138
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "TER",
        "timestamp": 1459558700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 169,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.72959132040542,
            "longitude": -122.45983982112051
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "WAY",
        "timestamp": 1503856100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 101,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75861078989259,
            "longitude": -122.50412700607684
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1515375400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 183,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.7487427197876,
            "longitude": -122.40676478709416
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1539151600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 100,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77794574162885,
            "longitude": -122.40497278959802
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1466422800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 123,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.80174998857751,
            "longitude": -122.46394695983884
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "BLVD",
        "timestamp": 1532204700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 149,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73520147819627,
            "longitude": -122.38558855237001
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "CIR",
        "timestamp": 1448739500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 101,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73445578810635,
            "longitude": -122.40360507007529
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1545345400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 146,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71119311229364,
            "longitude": -122.3983450898374
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1528994900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 184,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.735114660136645,
            "longitude": -122.38518457041732
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "CIR",
        "timestamp": 1492200900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 108,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.7903243985476,
            "longitude": -122.40729161761188
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "ST",
        "timestamp": 1501116200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 150,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71332196300924,
            "longitude": -122.40209731833207
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1496987400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 105,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76524806992017,
            "longitude": -122.4816024572775
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "WAY",
        "timestamp": 1443969300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 133,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78253512573481,
            "longitude": -122.43929657448672
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1442922000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 100,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.757644338193145,
            "longitude": -122.39112162638698
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1452022300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 124,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77399121607728,
            "longitude": -122.42663927374633
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1521918000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 129,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.72020686264858,
            "longitude": -122.37123969562141
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1526915600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 101,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73199556968315,
            "longitude": -122.42827512313168
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1505413900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 166,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.7885322941927,
            "longitude": -122.42866016625908
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1520375800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 173,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.7878333669682,
            "longitude": -122.47468755493776
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1538056500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 193,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79904839892945,
            "longitude": -122.40723194731264
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1529706800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 165,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.72255181992316,
            "longitude": -122.42452733620568
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1441063200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 162,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71419071150498,
            "longitude": -122.4514513762389
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 65,
        "streetType": "",
        "timestamp": 1479829400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 105,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79092945555385,
            "longitude": -122.40065219150522
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1488767900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 134,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.803589978557135,
            "longitude": -122.44491683940564
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1449364600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 165,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75254086078501,
            "longitude": -122.47050393373408
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "WAY",
        "timestamp": 1532543300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 194,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78101985177893,
            "longitude": -122.46441163531158
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "BLVD",
        "timestamp": 1436580800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 190,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78124250433184,
            "longitude": -122.46002406650649
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "BLVD",
        "timestamp": 1450027000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 136,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.737369743299375,
            "longitude": -122.42402108809299
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1458703300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 130,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.7364731949777,
            "longitude": -122.39815223454012
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1522393700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 135,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76149328857225,
            "longitude": -122.43285119663393
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1550018400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 130,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78990667268315,
            "longitude": -122.39670747169934
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1466963200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 114,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.72711442779786,
            "longitude": -122.42473575939442
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1524343500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 181,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79143485618618,
            "longitude": -122.47829116862268
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "DR",
        "timestamp": 1432331900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 172,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71182375912227,
            "longitude": -122.46527291995484
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1433321600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 192,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.773477186392334,
            "longitude": -122.4652064819023
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "ST",
        "timestamp": 1483019100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 166,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73201613475855,
            "longitude": -122.39343423780969
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1546771200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 125,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.756893913919306,
            "longitude": -122.45473627532185
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "DR",
        "timestamp": 1522259000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 129,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76497156337717,
            "longitude": -122.39667198512832
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1544835200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 101,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.772430874169515,
            "longitude": -122.44394322282697
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "ST",
        "timestamp": 1528037300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 111,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.733830951299716,
            "longitude": -122.38895373731762
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1538870700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 145,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79853100073349,
            "longitude": -122.4311543087874
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1514851500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 122,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.70924557910133,
            "longitude": -122.41785065809512
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1540177700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 105,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.7229792336723,
            "longitude": -122.45158917586322
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1564920900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 165,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.773490481070475,
            "longitude": -122.41137091220271
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1541848900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 160,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.70866730631949,
            "longitude": -122.38939245356478
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1479300100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 119,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.7757095045925,
            "longitude": -122.42795077130735
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1501195100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 115,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77959503804292,
            "longitude": -122.45884133122833
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "BLVD",
        "timestamp": 1448078000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 160,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75842583834912,
            "longitude": -122.44357096179303
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1452778300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 123,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.761732781052054,
            "longitude": -122.38905967988434
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1432940400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 141,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.803958008945386,
            "longitude": -122.4065903872932
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1497839700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 132,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78224463294236,
            "longitude": -122.41048653097208
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1420599000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 143,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71663046957455,
            "longitude": -122.39855696628271
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 35,
        "streetType": "BLVD",
        "timestamp": 1430718700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 183,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79977021871298,
            "longitude": -122.43608100098302
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "ST",
        "timestamp": 1538115500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 111,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77718468445289,
            "longitude": -122.4144990055843
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1449633500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 104,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.7780772335867,
            "longitude": -122.40561338607236
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1511127900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 132,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79531745938282,
            "longitude": -122.44837412101323
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "LOOP",
        "timestamp": 1447756900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 134,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.768521839945286,
            "longitude": -122.39701088176075
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 65,
        "streetType": "RAMP",
        "timestamp": 1426843000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 133,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73053110993788,
            "longitude": -122.43676432046452
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1422199200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 129,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.732043439219424,
            "longitude": -122.41391342120987
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 65,
        "streetType": "RAMP",
        "timestamp": 1530904300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 174,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77339697855504,
            "longitude": -122.4439480321017
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "ST",
        "timestamp": 1561772600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 106,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.80211434493422,
            "longitude": -122.45526059342608
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "CT",
        "timestamp": 1430911500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 164,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.80453197155084,
            "longitude": -122.40836727253205
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1524778500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 100,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.805098164711204,
            "longitude": -122.44871916294302
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "",
        "timestamp": 1452999500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 145,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76260516482882,
            "longitude": -122.49905515513963
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1560125800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 130,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.73965888369851,
            "longitude": -122.40097896030858
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "ST",
        "timestamp": 1532740700,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 144,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77199182399349,
            "longitude": -122.49596933350617
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1451177500,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 141,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.757797237599604,
            "longitude": -122.43344809168315
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1457789600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 147,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.79931390731892,
            "longitude": -122.44606720326664
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1475343200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 143,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.756422789597,
            "longitude": -122.41548678153204
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": true,
        "speedLimit": 15,
        "streetType": "ST",
        "timestamp": 1423446400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 182,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.773125571167476,
            "longitude": -122.47212688000288
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 30,
        "streetType": "ST",
        "timestamp": 1452793100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 181,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78334885151432,
            "longitude": -122.4091102618152
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1542208000,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 136,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.723381593351625,
            "longitude": -122.46654819094016
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "DR",
        "timestamp": 1430040800,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 163,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.77314765955088,
            "longitude": -122.41974406271771
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "PL",
        "timestamp": 1421327100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 159,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.78894084380477,
            "longitude": -122.44174347985344
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1505109400,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 162,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71665597469648,
            "longitude": -122.39889583787341
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1534245600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 112,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76271853786474,
            "longitude": -122.39441750960307
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1566343900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MAJOR",
        "dca": 103,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74986469369966,
            "longitude": -122.45025268590915
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "WAY",
        "timestamp": 1498079600,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 122,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.728094133458086,
            "longitude": -122.44072536475726
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1564959100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 175,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.72778720072938,
            "longitude": -122.3934986827693
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "AVE",
        "timestamp": 1563540900,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MINOR",
        "dca": 194,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.75148061700274,
            "longitude": -122.45695861437405
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 35,
        "streetType": "AVE",
        "timestamp": 1444393200,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "NONE",
        "dca": 169,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.74174889429992,
            "longitude": -122.5052877719242
        },
        "mode": "CONVENTIONAL",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1433117300,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "MODERATE",
        "dca": 171,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.76806306678776,
            "longitude": -122.50043956091152
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "DR",
        "timestamp": 1503178100,
        "updatedAt": new Date()
    },
    {
        "createdAt": new Date(),
        "damageSeverity": "UNKNOWN",
        "dca": 109,
        "description": "Lorem ipsum dolor sit amet.",
        "location": {
            "latitude": 37.71845541099224,
            "longitude": -122.43953046016104
        },
        "mode": "AUTONOMOUS",
        "numVehicles": 2,
        "schoolZone": false,
        "speedLimit": 25,
        "streetType": "ST",
        "timestamp": 1546997200,
        "updatedAt": new Date()
    }
],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("IncidentsVehicles", null, {});
  }
};