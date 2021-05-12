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
    updateAccountList: async (filter, dataObject) => {
        try {
            const model = await models;
            const updateAccountList = await model.account_list.update(
                dataObject,
                { ...filter }
            );
            const realData = JSON.parse(JSON.stringify(updateAccountList));
            return realData;
        } catch (error) {
            console.log(
                'AccountlistRepository updateAccountList -> error',
                error
            );
            throw error;
        }
    },
    deleteAccountList: async (filter) => {
        try {
            const model = await models;
            const deleteAccountList = await model.account_list.destroy({
                ...filter
            });
            return deleteAccountList;
        } catch (error) {
            console.log(
                'AccountlistRepository deleteAccountList -> error',
                error
            );
            throw error;
        }
    },
    getAccountList: async (filter = {}) => {
        try {
            const model = await models;
            const result = await model.account_list.findAll({
                ...filter,
                raw: true
            });
            return result;
        } catch (error) {
            console.log('AccountlistRepository getAllData -> error', error);
            throw error;
        }
    },
    getAccountListSortOrder: async (func = 'max', filter = {}) => {
        try {
            const model = await models;
            const result = await model.account_list.findAll({
                attributes: [fn(func, col('sorting_order'))],
                ...filter,
                raw: true
            });
            return result;
        } catch (error) {
            console.log(
                'AccountlistRepository getAccountListSortOrder -> error',
                error
            );
            throw error;
        }
    }
};

module.exports = TicketRepository;
