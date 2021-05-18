const mongoose = require("mongoose")
const Gouvernorat = mongoose.model('gouvernorats', {

    Idgouv: {
        type: String,
        required: true 
    },
    NomGouvernoratFR: {
        type: String,
        required: true
    },
    NomGouvernoratAR: {
        type: String,
        required: true
    }
})
module.exports = Gouvernorat

