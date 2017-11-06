import { ITags } from './main'
import http = require("http")

export function buildParams(tags: ITags): string {
    let params = ""
    Object.keys(tags).forEach(key => {
        params += "&" + key + "=" + tags[key]
    });

    return params;
}
export function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const request = http.get(url, (response) => {
      if (response.statusCode < 200 || response.statusCode > 299) {
        reject(new Error('Failed to load page, status code: ' + response.statusCode));
      }
      const body = []
      response.on('data', (chunk) => body.push(chunk));
      response.on('end', () => resolve(body.join('')));
    });
    request.on('error', (err) => reject(err))
  })
}