
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        return response.status(401).send({error: 'No token provided'});
    }

    const parts = authHeader.split(' ');

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return response.status(401).send({error: 'Token malformatted' });
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if(err){
            return response.status(401).send({error: 'Token invalid'}); 
        }

        request.userToken = token;
        request.userId = decoded.id;
        return next();
    })

}