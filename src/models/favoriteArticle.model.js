const { Model, DataTypes } = require('sequelize');

class FavoriteArticleModel extends Model {
    static init(sequelize){
        super.init({
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
            tableName: 'favorite_article'
        })
    }

    static associate(models){
        this.belongsTo(models.UserModel, { foreignKey: 'user_id', as: 'users'});
    }
}

module.exports = FavoriteArticleModel;