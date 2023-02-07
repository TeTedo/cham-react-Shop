let request = require("request");

let url =
  "http://openapi.airport.co.kr/service/rest/FlightScheduleList/getIflightScheduleList";
let queryParams =
  "?" + encodeURIComponent("serviceKey") + "=서비스키"; /* Service Key*/
queryParams +=
  "&" +
  encodeURIComponent("schDate") +
  "=" +
  encodeURIComponent("20151005"); /* */
queryParams +=
  "&" +
  encodeURIComponent("schDeptCityCode") +
  "=" +
  encodeURIComponent("GMP"); /* */
queryParams +=
  "&" +
  encodeURIComponent("schArrvCityCode") +
  "=" +
  encodeURIComponent("HND"); /* */
queryParams +=
  "&" + encodeURIComponent("schAirLine") + "=" + encodeURIComponent("NH"); /* */
queryParams +=
  "&" +
  encodeURIComponent("schFlightNum") +
  "=" +
  encodeURIComponent("NH862"); /* */

request(
  {
    url: url + queryParams,
    method: "GET",
  },
  function (error, response, body) {
    console.log("Status", response.statusCode);
    console.log("Headers", JSON.stringify(response.headers));
    console.log("Reponse received", body);
  }
);
