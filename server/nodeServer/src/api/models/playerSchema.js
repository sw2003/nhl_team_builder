const mongoose = require('mongoose') 

const playerSchema = new mongoose.Schema({
    fullname: String,
    goals: Number,
    assists: Number, 
    gamesPlayed: String,
    shots: Number, 
    positionCode: String, 
    plusminus: String, 
    team: String, 
    timeOnIcePerGame: Number, 
    espnId: Number
})

module.exports = mongoose.model('PlayersV3' , playerSchema, 'PlayersV3')