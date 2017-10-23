import * as request from "request-promise"
import { buildParams } from "./util"

export interface ITags {
  [key: string]: string;
}

export class cGG {
  private baseUrl = "http://api.champion.gg/v2/"
  key: string
  constructor(userInput: string) {
    this.key = userInput
  }
  champions(tags: ITags = {}) {
    const params = buildParams(tags);
    return request(`${this.baseUrl}champions?api_key=${this.key}${params}`)
  }
  matchupsByRole(id: number, role: string, tags: ITags = {}) {
    const params = buildParams(tags);
    return request(`${this.baseUrl}champions/${id}/${role}/matchups?elo=SILVER&api_key=${this.key}${params}`)
  }
  matchupsByChamp(id: number, tags: ITags = {}) {
    const params = buildParams(tags);
    return request(`${this.baseUrl}champions/${id}/matchups?api_key=${this.key}${params}`)
  }
  averagesByChampion(id: number, tags: ITags = {}) {
    const params = buildParams(tags);
    return request(`${this.baseUrl}champions/${id}?api_key=${this.key}${params}`)
  }
  generalSiteInformation(tags: ITags = {}) {
    const params = buildParams(tags);
    return request(`${this.baseUrl}general?api_key=${this.key}${params}`)
  }
  overall(tags: ITags = {}) {
    const params = buildParams(tags);
    return request(`${this.baseUrl}overall?api_key=${this.key}${params}`)
  }
}
