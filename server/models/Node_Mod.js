module.exports = (sequelize, DataTypes) => {
    const NodeMod = sequelize.define("NodeMod", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        nodeModText: {
            type: DataTypes.STRING,
            allowNull: false
        },

        images: {
            type: DataTypes.STRING,
            allowNull: false
        },

        graphs: {
            type: DataTypes.STRING,
            allowNull: false
        },


    })

    return NodeMod
}