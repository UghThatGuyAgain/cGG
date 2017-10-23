import { ITags } from './main'

export function buildParams(tags: ITags): string {
    let params = ""
    Object.keys(tags).forEach(key => {
        params += "&" + key + "=" + tags[key]
    });

    return params;
}
