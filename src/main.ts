import * as request from "request-promise"

class cGG {
  key: string
  constructor(userInput: string) {
    this.key = userInput
  }
  champions(tags = {}) {
    let params = ""
    Object.keys(tags).forEach(key => {
      params += "&" + key + "=" + tags[key]
    })
    return request(`http://api.champion.gg/v2/champions?api_key=${this.key}${params}`)
  }
  matchupsByRole(id: number, role: string, tags = {}) {
    let params = ""
    Object.keys(tags).forEach(key => {
      params += "&" + key + "=" + tags[key]
    })
    return request(`http://api.champion.gg/v2/champions/${id}/MIDDLE/matchups?elo=SILVER&api_key=${this.key}${params}`)
  }
  matchupsByChamp(id: number, tags = {}) {
    let params = ""
    Object.keys(tags).forEach(key => {
      params += "&" + key + "=" + tags[key]
    })
    return request(`http://api.champion.gg/v2/champions/${id}/matchups?api_key=${this.key}${params}`)
  }
  averagesByChampion(id: number, tags = {}) {
    let params = ""
    Object.keys(tags).forEach(key => {
      params += "&" + key + "=" + tags[key]
    })
    return request(`http://api.champion.gg/v2/champions/${id}?api_key=${this.key}${params}`)
  }
  generalSiteInformation(tags = {}) {
    let params = ""
    Object.keys(tags).forEach(key => {
      params += "&" + key + "=" + tags[key]
    })
    return request(`http://api.champion.gg/v2/general?api_key=${this.key}${params}`)
  }
  overall(tags = {}) {
    let params = ""
    Object.keys(tags).forEach(key => {
      params += "&" + key + "=" + tags[key]
    })
    return request(`http://api.champion.gg/v2/overall?api_key=${this.key}${params}`)
  }
}

export {cGG};