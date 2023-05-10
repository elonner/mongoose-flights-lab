const Flight = require('../models/flight');
const Ticket = require('../models/ticket')


module.exports = {
    new: newTicket,
    create
}

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    req.body.flight = flight._id;
    try {
        await Ticket.create(req.body);
        res.redirect(`/flights/${flight._id}`)//, { title: 'Flight Details', flight, newTicket });
    } catch (err) {
        console.log(err);
        res.redirect(`tickets/new`);
    }
}

async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render(`tickets/new`, { title: 'New Ticket', flight, errorMsg: 'Failed to create a ticket!'})
}