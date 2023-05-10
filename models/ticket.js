const mongoose = require('mongoose');


const ticketSchema = new mongoose.Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    flight: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight'
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Ticket', ticketSchema);