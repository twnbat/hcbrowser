import ChallengeService from "../services/ChallengeService.js";
import Challenge from "../models/Challenge.js";
import { isValidChallengeNumber } from "../validators/ChallengeNumberValidator.js";
import LevelsService from "../services/LevelsService.js";

export default class ChallengeController {
    static challengeService = new ChallengeService()
    static levelsService = new LevelsService()
    async getLevelFromChallengeNumber(req, res) {
        const challengeNumber = req.params.id
        if (!isValidChallengeNumber(challengeNumber)) {
            res.status(400).json({
                error: "Bad request: invalid challenge number"
            })
            return
        }

        try {
            const level = await ChallengeController.challengeService.getLevelFromChallengeNumber((challengeNumber))
            res.json({
                challenge: ChallengeController.levelsService.stringifyGDlevel(level),
                challengenumber: challengeNumber
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Internal server error"})
        }
    }

    async getChallengeFromChallengeNumber(req, res) {
        const challengeNumber = req.params.id
        if (!isValidChallengeNumber(challengeNumber)) {
            res.status(400).json({
                error: "Bad request: invalid challenge number"
            })
            return
        }
        try {
            const level = await ChallengeController.challengeService.getLevelFromChallengeNumber((challengeNumber))
            const challenge = new Challenge(level, challengeNumber)
            res.json({
                challenge: challenge,
                challengenumber: challengeNumber
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Internal server error"})
        }
    }

    async getFirstAndLastChallengeNumbersJSON(req, res) {
        const firstAndLastChallengeNumbers = ChallengeController.challengeService.getFirstAndLastChallengeNumbers()
        if (!firstAndLastChallengeNumbers) {
            res.status(500).json({ error: "Internal server error"})
            return
        }
        res.json({
            firstAndLastChallengeNumbers
        })
    }
}