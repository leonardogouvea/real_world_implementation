import express, { Application} from 'express'
import { router } from './routes';
const app: Application = express()
const port = 3000
const cors = require('cors');
require('./database');

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
} catch (error) {
    console.log(`Error occurred: ${error.message}`)
}

