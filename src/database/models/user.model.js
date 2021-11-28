const { Model, DataTypes } = require('sequelize');

class UserModel extends Model {
    static init(sequelize){ 
        super.init({
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            }, 
            username: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            bio: DataTypes.STRING,
            image: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'users'
        })

    }

    static associate(models){
        this.hasMany(models.ArticleModel, { foreignKey: 'user_id', as: 'articles'});
        this.hasMany(models.FollowersModel, { foreignKey: 'followers_id', as: 'follow'});
    }
}

module.exports = UserModel;
