const mongoose = require('mongoose');


const destSchema = new mongoose.Schema({
    airport: {
        type: String,
        enum: ['OAK', 'LAX', 'HOU', 'DEN', 'SFO'],
        required: true
    },
    arrival: Date
});

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['Southwest', 'United', 'American'],
        required: true
    },
    airport: {
        type: String,
        enum: ['OAK', 'LAX', 'HOU', 'DEN', 'SFO'],
        required: true
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            const date = new Date().getFullYear();
            date.setFullYear(date.getFullYear() + 1);
            return date;
        },
        required: true
    },
    destinations: [destSchema]
}, {
    timestamps: true
});


module.exports = mongoose.model('Flight', flightSchema);