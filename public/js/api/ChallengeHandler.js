import { ENDPOINTS } from "../config.js"
import { parse } from "https://cdn.jsdelivr.net/npm/flatted/esm.js";

export async function getFirstAndLastChallenges() {
    try {
        const res = await fetch(ENDPOINTS.GET_FIRST_AND_LAST)
        const data = await res.json()
        return data;
    } catch (error) {
        console.error(error)
    }
    
}

export async function getChallengeFromChallengeNumber(number) {
    const res = await fetch(ENDPOINTS.GET_CHALLENGE(number))
    const data = await res.json()
    return data
}

export async function getLevelFromChallengeNumber(number) {
    const res = await fetch(ENDPOINTS.GET_LEVEL(number))
    const data = await res.json()
    return data
}
