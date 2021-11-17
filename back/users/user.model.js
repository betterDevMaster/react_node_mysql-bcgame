const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        hash: { type: DataTypes.STRING, allowNull: false },
        profilePicURL: { type: DataTypes.TEXT('long'), allowNull: false },
        social: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0 },
        role: { type: DataTypes.STRING, allowNull: false, defaultValue: 'GUEST' },
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}