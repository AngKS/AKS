const Event = require("../structures/Event")

module.exports = new Event("voiceStateUpdate", (prevState, newState) => {
    

    let stateChange = {}
    if (prevState.channel === null && newState.channel !== null) stateChange.type = "JOIN"
    if (prevState.channel !== null && newState.channel === null) stateChange.type = "LEAVE"
    if (prevState.channel !== null && newState.channel !== null) stateChange.type = "MOVE"
    if (prevState.channel === null && newState.channel === null) return

    return stateChange

})