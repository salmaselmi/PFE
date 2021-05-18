const mongoose = require("mongoose");

const User = mongoose.model('users',
    {
        nom: {
            type: String,
            required: true
        },
        prenom: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: String
        },
        date:{
            type:String
        },
        fonctionnalite: {
            type: String,
            required: true
    
        },
       
        role: {
            type: String,
            required: true,
            default: 'user' 
        }
    })

module.exports = User 