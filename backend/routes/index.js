import express from 'express'
import challengeRouter from './ChallengeRoute.js';
import { ROUTE_NAMES } from '../../public/js/config.js';
const route = express.Router()

route.use(ROUTE_NAMES.CHALLENGE, challengeRouter)

export default route;