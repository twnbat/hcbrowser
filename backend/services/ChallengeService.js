import data from '../../data.json' with {type : 'json'}
import Challenge from '../models/Challenge.js'
import LevelsService from './LevelsService.js'
export default class ChallengeService {
    static levelsService = new LevelsService()
    getChallengeData() {
        return data
    }

    getFirstAndLastChallengeNumbers() {
        const levelsKeys = Object.keys(data.levels)
        return {
            first: levelsKeys[0],
            last: levelsKeys[levelsKeys.length - 1]
        }
    }

    getIDFromChallengeNumber(challengeNumber) {
        return data.levels[challengeNumber]
    }

    async getChallengeFromChallengeNumber(challengeNumber) {
        const level = await this.getLevelFromChallengeNumber(challengeNumber)
        return new Challenge(level, challengeNumber)
    }

    async getLevelFromChallengeNumber(challengeNumber) {
        const id = this.getIDFromChallengeNumber(challengeNumber)
        if(!id) {
            console.trace(`Challenge number ${challengeNumber} could not be linked to a challenge ID`)
            return
        }

        const level = await ChallengeService.levelsService.getGDLevel(id)

        if (!level) {
            console.trace(`Could not find level of ID ${id}`)
        }
        return level
    }
}