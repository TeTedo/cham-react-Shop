var xhr = new XMLHttpRequest();
var url =
  "http://openapi.airport.co.kr/service/rest/FlightScheduleList/getIflightScheduleList"; /*URL*/
var queryParams =
  "?" + encodeURIComponent("serviceKey") + "=" + "서비스키"; /*Service Key*/
queryParams +=
  "&" +
  encodeURIComponent("schDate") +
  "=" +
  encodeURIComponent("20151005"); /**/
queryParams +=
  "&" +
  encodeURIComponent("schDeptCityCode") +
  "=" +
  encodeURIComponent("GMP"); /**/
queryParams +=
  "&" +
  encodeURIComponent("schArrvCityCode") +
  "=" +
  encodeURIComponent("HND"); /**/
queryParams +=
  "&" + encodeURIComponent("schAirLine") + "=" + encodeURIComponent("NH"); /**/
queryParams +=
  "&" +
  encodeURIComponent("schFlightNum") +
  "=" +
  encodeURIComponent("NH862"); /**/
xhr.open("GET", url + queryParams);
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    alert(
      "Status: " +
        this.status +
        "nHeaders: " +
        JSON.stringify(this.getAllResponseHeaders()) +
        "nBody: " +
        this.responseText
    );
  }
};

xhr.send("");
