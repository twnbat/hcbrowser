import ChallengeService from "../services/ChallengeService.js"

const challengeService = new ChallengeService()
const FIRST_AND_LAST = challengeService.getFirstAndLastChallengeNumbers()

export function isValidChallengeNumber(number) {
    const strNumber = Number.parseInt(number)
    if (isNaN(strNumber)) {
        return false
    }
    return strNumber >= FIRST_AND_LAST.first && strNumber <= FIRST_AND_LAST.last
}