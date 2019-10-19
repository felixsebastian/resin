import moment from "moment";

export default time =>
  moment
    .unix(time)
    .format("MMMM Do YYYY, h:mm:ss a")
    .toString();
