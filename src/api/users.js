import request from "superagent";

export function getDogs() {
  return request.get("/api").then(res => {
    const dogs = res.body;
    return dogs;
  });
}
