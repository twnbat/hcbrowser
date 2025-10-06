import GD from 'gd.js';
import { stringify } from 'flatted';
export default class LevelsService {
    static gdApi = new GD()

    async getGDLevel(levelID) {
        try {
            const level = await LevelsService.gdApi.levels.get(levelID)
            if (level) { // Probably redundant
                return level;
            } else {
                console.trace(`could not find level of id ${levelID}`)
            }
        } catch (error) {
            console.error(error)
        }
    }

    serialiseGDLevel(level) {
        return JSON.stringify(level, (k, v) => {
            if (k == "_client") {
                return undefined
            }
            return v
        }, 2)
    }

    stringifyGDlevel(level) {
        return stringify(level)
    }
}