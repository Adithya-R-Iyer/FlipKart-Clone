import { default as express } from 'express';
import { default as dotenv} from 'dotenv';

import Connection from './database/db.js';
import Defaultdata from './default.js';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true})); // extended = true allows parsing of nested objects within the request body
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router);

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);

const PORT = process.env.SERVER_PORT_NUMBER;

app.listen(PORT, () => console.log(`server running successfully on 8000`));

Defaultdata();
