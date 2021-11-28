const { Model, DataTypes } = require('sequelize');

class ArticleModel extends Model {
    static init(sequelize){ 
        super.init({
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            slug: DataTypes.STRING,
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            body: DataTypes.STRING,
            tagList:{
                type: DataTypes.STRING,
                allowNull: true
            } 
        }, {
            sequelize,
            tableName: 'articles'
        })
    }

    static associate(models){
        this.belongsTo(models.UserModel, { foreignKey: 'user_id', as: 'author'});
        this.hasMany(models.CommentsModel, { foreignKey: 'article_id', as: 'comment'});
        this.hasMany(models.FavoriteArticleModel, { foreignKey: 'article_id', as: 'favorite_article'});    }

}

module.exports = ArticleModel;