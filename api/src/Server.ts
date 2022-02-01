import morgan from "morgan";
import helmet from "helmet";
import StatusCodes from 'http-status-codes';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import plants from "./routes/plants";
import {connect} from "mongoose";

import 'express-async-errors';

import logger from '@shared/Logger';

const app = express();
const { BAD_REQUEST } = StatusCodes;



/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/
let mongoDB: string = process.env.DATABASE || "mongodb://127.0.0.1:27017/little";
connect(mongoDB).catch (err => {
   logger.warn("MongoDB connection error: " + err);
}).then(()=>{logger.info("Connected to database")});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}

// Add APIs
app.use("/", plants);

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.err(err, true);
    return res.status(BAD_REQUEST).json({
        error: err.message,
    });
});



/************************************************************************************
 *                              Serve front-end content
 ***********************************************************************************/
/************************************************************************************
 *                              Export Server
 ***********************************************************************************/

export default app;
