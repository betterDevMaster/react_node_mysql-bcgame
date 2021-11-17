const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        gameType: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0, comment: '0: OriginalGame, 1: Slots, 2: Casinos' },
        gameUrl: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        icon: { type: DataTypes.STRING, allowNull: false },
        image: { type: DataTypes.TEXT('long') , allowNull: false },
        supportedPlayType: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0, comment: '0: DemoPlay, 1: Mobile' },
        favorite: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        fairness: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        playType: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0, comment: '0: Freeplay, 1: RealPlay' },
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

    return sequelize.define('Game', attributes, options);
}