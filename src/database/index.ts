import { Sequelize } from'sequelize';
const dbConfing = require('../config/database.js');

import UserModel from '../models/user.model';
import FollowersModel from '../models/followers.model';
import ArticleModel from '../models/article.model';
import CommentsModel from '../models/comments.model';
import FavoriteArticleModel from '../models/favoriteArticle.model';

const connection = new Sequelize(dbConfing);

UserModel.init(connection);
FollowersModel.init(connection);
ArticleModel.init(connection);
CommentsModel.init(connection);
FavoriteArticleModel.init(connection);

UserModel.associate(connection.models);
FollowersModel.associate(connection.models);
ArticleModel.associate(connection.models);
FavoriteArticleModel.associate(connection.models);
//CommentsModel.associate(connection.models);

module.exports = connection;