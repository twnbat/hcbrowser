import * as ChallengeHandler from './api/ChallengeHandler.js'
/** @type {HTMLCollectionOf<Element>} */
const numButtons = document.getElementsByClassName("numbutton")
const challengeNumberDisplay = document.getElementById("numdisplay")
const contentDisplay = document.getElementById("content")
const searchButton = document.getElementById("go")
const { firstAndLastChallengeNumbers } = await ChallengeHandler.getFirstAndLastChallenges()
let challengeNumber = 0

function setChallengeNumber(num) {
    challengeNumber = num
    challengeNumberDisplay.textContent = `Selected Challenge: had0j Challenge ${challengeNumber}`
}

for (let button of numButtons) {
    button.addEventListener("click", () => {
        const incrementNumber = Number.parseInt(button.textContent)
        const first = Number.parseInt(firstAndLastChallengeNumbers.first)
        const last = Number.parseInt(firstAndLastChallengeNumbers.last)
        let newChallengeNumber = challengeNumber + incrementNumber
        if (newChallengeNumber < first) {
            newChallengeNumber = first
        }

        if (newChallengeNumber > last) {
            newChallengeNumber = last
        }

        setChallengeNumber(newChallengeNumber)
    })
}

searchButton.addEventListener("click", async () => {
    const chall = await ChallengeHandler.getChallengeFromChallengeNumber(challengeNumber)
    console.log(chall.challenge.essential)
    contentDisplay.textContent = JSON.stringify(chall, null, 2)
})






