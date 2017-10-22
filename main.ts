import * as request from "request-promise";

class Api {
  key: string;
  constructor(userInput: string) {
    this.key = userInput;
  }
  champions(tags?: object) {
    let params = "";
    Object.keys(tags).forEach(key => {
      params += "&" + key + "=" + tags[key]
    })
    return request(`http://api.champion.gg/v2/champions?api_key=${this.key}${params}`);
  }
  matchupsByRole(id: number, role: string, tags?: object) {
    let params = "";
    Object.keys(tags).forEach(key => {
      params += "&" + key + "=" + tags[key]
    })
    return request(`http://api.champion.gg/v2/champions/${id}/MIDDLE/matchups?elo=SILVER&api_key=${this.key}${params}`)
  }
  matchupsByChamp(id: number, tags = {}) {
    let params = "";
    Object.keys(tags).forEach(key => {
      params += "&" + key + "=" + tags[key]
    })
      return request(`http://api.champion.gg/v2/champions/${id}/matchups?api_key=${this.key}${params}`)
  }
}

const test = new Api("ba26ff97bb1e2e477c10930d0039bb29")
test.champions({"champData": ["kda", "damage"], "elo": ["PLATINUM"]})
test.matchupsByRole(1, "middle").then(data => console.log(data))
test.matchupsByChamp(1).then(data => console.log(data))
