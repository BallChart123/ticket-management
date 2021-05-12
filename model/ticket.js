const model = (Sequelize, DataTypes) => {
    const Ticket = Sequelize.define(
        'ticket',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            name: DataTypes.STRING(50),
            description: DataTypes.STRING(200),
            status: DataTypes.ENUM(
                'pending',
                'accepted',
                'resolved',
                'rejected'
            ),
            contact_information: DataTypes.STRING,
            created_by: {
                type: DataTypes.STRING(50)
            },
            created_on: {
                type: DataTypes.DATE
            },
            updated_by: {
                type: DataTypes.STRING(50)
            }
        },
        {
            tableName: 'ticket',
            freezeTableName: true,
            timestamps: true,
            createdAt: true,
            updatedAt: true
        }
    );

    return Ticket;
};
module.exports = model;
