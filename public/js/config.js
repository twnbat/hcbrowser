export const ROUTE_NAMES = {
    CHALLENGE: "/challenge"
}

export const ENDPOINTS = {
    GET_FIRST_AND_LAST: ROUTE_NAMES.CHALLENGE + "/fl",
    GET_LEVEL: (num) => `${ROUTE_NAMES.CHALLENGE}/search/${num}`,
    GET_CHALLENGE: (num) => `${ROUTE_NAMES.CHALLENGE}/challenge/${num}`
}