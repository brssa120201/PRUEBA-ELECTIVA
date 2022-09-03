const mongoose = require('mongoose')
const movieSchema = mongoose.Schema({
    movie_name:{
        type: String,
        require: true,
        unique: true
    },
    season:{
        type: Number,
        require: true
    },
    authors:{
        type:[],
        require: true
    }
})

module.exports = mongoose.model('MoviesCollection', movieShema)