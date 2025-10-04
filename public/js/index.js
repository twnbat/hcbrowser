import * as ChallengeHandler from './api/ChallengeHandler.js'
import * as Utils from './util/Utils.js'
/** @type {HTMLCollectionOf<Element>} */
const numButtons = document.getElementsByClassName("numbutton")
const challengeNumberDisplay = document.getElementById("numdisplay")
const contentDisplay = document.getElementById("content")
const searchButton = document.getElementById("go")
const { firstAndLastChallengeNumbers } = await ChallengeHandler.getFirstAndLastChallenges()
const difficultyFace = document.getElementById("difficultyface")
const idButton = document.getElementById("idbutton")
const copynotif = document.getElementById("copynotif")
const domObjectIdToLevelProperty = {
  stars: "stars",
  requestedstars: "requestedstars",
  challnumber: "challengeNumber",
  song: "song",
  levelid: "id",
  difficulty: "difficulty",
  description: "description",
  levelname: "name"
};


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

idButton.addEventListener("click", async () => {
    const idText = document.getElementById("levelid")
    if (!isNaN(idText.textContent)) {
        try {
            await navigator.clipboard.writeText(idText.textContent)
            copynotif.classList.remove("hidden")
            setTimeout(() => {
                copynotif.classList.add("hidden")
            }, 2000)
        } catch (error) {
            console.log("Copy failed", error)
        }
    }
})

searchButton.addEventListener("click", async () => {
    const level = await ChallengeHandler.getChallengeFromChallengeNumber(challengeNumber)
    console.log(level)
    for (const [id, field] of Object.entries(domObjectIdToLevelProperty)) {
        
        const element = document.getElementById(id)
        if (id === "stars") {
            if (level.challenge.essential[field] === 0) {
                element.textContent = "Unrated"
                continue
            }
        }
        element.textContent = level.challenge.essential[field]
    }
    difficultyFace.src = "../assets/difficultyfaces/" + Utils.difficultyToFace[level.challenge.essential.difficulty] + ".png"
})







