const { Model, DataTypes } = require('sequelize');

class CommentsModel extends Model {
    static init(sequelize){
        super.init({
            body: DataTypes.TEXT,
            user_id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'users', key: 'id'},
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }, 
            article_id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'articles', key: 'id'},
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }, 
        }, {
            sequelize,
            tableName: 'comments'
        })
    }

    static associate(models){
        this.belongsTo(models.UserModel, { foreignKey: 'user_id', as: 'users'});
    }
}

module.exports = CommentsModel;