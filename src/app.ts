import express, { Application, Request, Response } from 'express'
import { router } from './routes';
const app: Application = express()
const cors = require('cors');
require('./database');

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router); 

export { app };
