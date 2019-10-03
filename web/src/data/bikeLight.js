import data from "./bike";

const DENOMINATOR = 40;
const channels = ["altitude", "cadence", "power"];

const dataLight = { time: [] };

channels.forEach(channel => {
  dataLight[channel] = [];
});

var j = 0;
for (var i = 0; i < data.time.length; i += DENOMINATOR) {
  dataLight.time[j] = data.time[i];
  for (var k = 0; k < channels.length; k++) {
    dataLight[channels[k]][j] = data[channels[k]][i];
  }
  j++;
}

export default dataLight;
