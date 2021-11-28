import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { authenticationController } from "./useCases/Authentication";
import { updateUserController } from "./useCases/UpdateUser";
import { getUserProfileController } from "./useCases/GetProfile";
import { followUserController } from "./useCases/FollowUser";
import { unfollowUserController } from "./useCases/UnfollowUser";
import { createArticleController } from "./useCases/CreateArticle";
import { updateArticleController } from "./useCases/UpdateArticle"; 
import { deleteArticleController } from "./useCases/DeleteArticle"; 
import { getArticleController } from "./useCases/GetArticle"; 
import { feedArticlesController } from "./useCases/FeedArticles"; 
import { getCurrentUserController } from "./useCases/GetCurrentUser"; 
import { addCommentsArticleController } from "./useCases/AddCommentsArticle";
import { getCommentsArticleController } from "./useCases/GetCommentsArticle"; 
import { deleteCommentArticleController } from "./useCases/DeleteCommentArticle"; 
import { favoriteArticlesController } from "./useCases/FavoriteArticle";  
import { unfavoriteArticleController } from "./useCases/UnfavoriteArticle";
import { listOfTagsController } from "./useCases/ListOfTags";   
import { listArticlesController } from "./useCases/ListArticles";   

const  Auth  = require ("./middlewares/Auth");
const router = Router();

router.post('/api/users', (request, response) => {
    return createUserController.handle(request, response);
});

router.post('/api/users/login', (request, response) => {
    return authenticationController.handle(request, response);
});

router.get('/api/articles/:slug/comments', (request, response) => {
    return getCommentsArticleController.handle(request, response);
});

router.get('/api/tags', (request, response) => {
    return listOfTagsController.handle(request, response);
});

router.get('/api/articles', (request, response) => {
    return listArticlesController.handle(request, response);
});

router.use(Auth);

router.put('/api/user', (request, response) => {
    return updateUserController.handle(request, response);
});

router.get('/api/user', (request, response) => {
    return getCurrentUserController.handle(request, response);
});

router.get('/api/profiles/:username', (request, response) => {
    return getUserProfileController.handle(request, response);
});

router.post('/api/profiles/:username/follow', (request, response) => {
    return followUserController.handle(request, response);
});

router.delete('/api/profiles/:username/follow', (request, response) => {
    return unfollowUserController.handle(request, response);
});

router.get('/api/articles/feed', (request, response) => {
    return feedArticlesController.handle(request, response);
});

router.get('/api/articles/feed/:limit', (request, response) => {
    return feedArticlesController.handle(request, response);
});

router.get('/api/articles/feed/:limit/:offset', (request, response) => {
    return feedArticlesController.handle(request, response);
});

router.get('/api/articles/:slug', (request, response) => {
    return getArticleController.handle(request, response);
});

router.get('/api/articles', (request, response) => {
    return listArticlesController.handle(request, response);
});

router.post('/api/articles', (request, response) => {
    return createArticleController.handle(request, response);
});

router.put('/api/articles/:slug', (request, response) => {
    return updateArticleController.handle(request, response);
});

router.delete('/api/articles/:slug', (request, response) => {
    return deleteArticleController.handle(request, response);
});

router.post('/api/articles/:slug/comments', (request, response) => {
    return addCommentsArticleController.handle(request, response);
});

router.get('/api/articles/:slug/comments', (request, response) => {
    return getCommentsArticleController.handle(request, response);
});

router.delete('/api/articles/:slug/comments/:id', (request, response) => {
    return deleteCommentArticleController.handle(request, response);
});

router.post('/api/articles/:slug/favorite', (request, response) => {
    return favoriteArticlesController.handle(request, response);
});

router.delete('/api/articles/:slug/favorite', (request, response) => {
    return unfavoriteArticleController.handle(request, response);
});





export { router };