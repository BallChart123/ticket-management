const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const pg = require('pg');
require('dotenv').config();

const basename = path.basename(__filename);
delete pg.native;
const db = {};

const connect = async () => {
    let sequelize;
    /* istanbul ignore next */
    if (process.env.LOCAL_DATABASE === 'dev') {
        sequelize = new Sequelize('sqlite::memory:', {
            // disable logging; default: console.log
            logging: true,
            dialectOptions: {
                useUTC: true,
                dateStrings: true,
                typeCast: true
            },
            pool: {
                max: 5,
                min: 0,
                acquire: 60000,
                idle: 900000
            }
        });
    }

    fs.readdirSync(__dirname)
        .filter(
            (file) =>
                file.indexOf('.') !== 0 &&
                file !== basename &&
                file.slice(-3) === '.js'
        )
        .forEach((file) => {
            // eslint-disable-next-line global-require
            const model = require(path.join(__dirname, file))(
                sequelize,
                Sequelize.DataTypes
            );
            db[model.name] = model;
        });

    Object.keys(db).forEach((modelName) => {
        /* istanbul ignore next */
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });

    db.sequelize = sequelize;

    return db;
};

module.exports = connect();
