const { Model, DataTypes } = require('sequelize');

class FollowersModel extends Model {
    static init(sequelize){ 
        super.init({
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            }, 
            followers_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            following_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'followers'
        })

    }

    static associate(models){
        // this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses'});
        this.belongsTo(models.UserModel, { foreignKey: 'following_id', as: 'follow'});

    }
}

module.exports = FollowersModel;