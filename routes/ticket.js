const router = require('express').Router();

const TicketRepository = require('../repository/TicketRepository');

const ticketRepository = new TicketRepository();
// index (get all tickets)
router.route('/').get((req, res) => {
    Ticket.find()
        .then((tickets) => res.json(tickets))
        .catch((err) => res.status(400).json('Error: ' + err));
});

// CREATE
router.route('/create').post(async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const status = req.body.status;
    const contactInformation = req.body.information;
    const createdBy = req.body.name;
    try {
        const result = await ticketRepository.createTicket(
            name,
            description,
            status,
            contactInformation,
            createdBy
        );
        return result;
    } catch (error) {
        console.log('error insert ::', error);
    }
});

// READ
router.route('/:id').get((req, res) => {
    Ticket.findById(req.params.id)
        .then((ticket) => res.json(ticket))
        .catch((err) => res.status(400).json('Error: ' + err));
});

// UPDATE
router.route('/update/:id').post((req, res) => {
    Ticket.findById(req.params.id)
        .then((ticket) => {
            ticket.title = req.body.title;
            ticket.description = req.body.description;
            ticket.projectName = req.body.projectName;
            ticket.assignee = req.body.assignee;
            ticket.priority = req.body.priority;
            ticket.status = req.body.status;
            ticket.type = req.body.type;

            ticket
                .save()
                .then(() => res.json('Ticket updated'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
});

// DELETE
router.route('/:id').delete((req, res) => {
    Ticket.findByIdAndDelete(req.params.id)
        .then((ticket) => res.json('Ticket deleted.'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
