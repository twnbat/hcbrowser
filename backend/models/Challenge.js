export default class Challenge {
    constructor(gdLevel, challengeNumber) {
        this.essential = {
            name: gdLevel.name,
            id: gdLevel.id,
            description: gdLevel.description,
            stars: gdLevel.difficulty.stars, // Will always be 0, since robtop is yet to rate had0j challenges.
            requestedstars: gdLevel.difficulty.requestedStars,
            difficulty: gdLevel.difficulty.level.pretty,
            song: gdLevel.song.name,
            creatorid: gdLevel.creator.id,
            challengeNumber: challengeNumber
        }
    }
}