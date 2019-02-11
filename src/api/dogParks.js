import request from "superagent";

const apiEndPoint = "/api/dogparks/";

export function getParks(name) {
  return request.get(apiEndPoint + name).then(res => res.body);
}
