const { fn, col } = require('sequelize');
const models = require('../model');

function TicketRepository() {}

TicketRepository.prototype = {
    createTicket: async (
        name,
        description,
        status,
        contactInformation,
        createdBy
    ) => {
        try {
            const model = await models;
            const createTicket = await model.ticket.create({
                name,
                description,
                status,
                contact_information: contactInformation,
                createdBy
            });
            const result = JSON.parse(JSON.stringify(createTicket));
            return result;
        } catch (error) {
            console.log('TicketRepository createTicket -> error', error);
            throw error;
        }
    },
    updateTicket: async (filter, dataObject) => {
        try {
            const model = await models;
            const updateAccountList = await model.ticket.update(dataObject, {
                ...filter
            });
            const realData = JSON.parse(JSON.stringify(updateAccountList));
            return realData;
        } catch (error) {
            console.log('TicketRepository updateTicket -> error', error);
            throw error;
        }
    },
    deleteTicket: async (filter) => {
        try {
            const model = await models;
            const deleteTicket = await model.ticket.destroy({
                ...filter
            });
            return deleteTicket;
        } catch (error) {
            console.log('TicketRepository deleteTicket -> error', error);
            throw error;
        }
    },
    getTicket: async (filter = {}) => {
        try {
            const model = await models;
            const result = await model.ticket.findAll({
                ...filter,
                raw: true
            });
            return result;
        } catch (error) {
            console.log('TicketRepository getTicket -> error', error);
            throw error;
        }
    }
};

module.exports = TicketRepository;
