import express from 'express'
import ChallengeController from '../controllers/ChallengeController.js'

const challengeRouter = express.Router();
const challengeController = new ChallengeController()

challengeRouter.get("/search/:id", async (req, res) => {
    await challengeController.getLevelFromChallengeNumber(req, res)
})

challengeRouter.get("/challenge/:id", async (req, res) => {
    await challengeController.getChallengeFromChallengeNumber(req, res)
})

challengeRouter.get("/fl", (req, res) => {
    challengeController.getFirstAndLastChallengeNumbersJSON(req, res)
})

export default challengeRouter