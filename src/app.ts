import "express-async-errors"
import "reflect-metadata";
import express from "express";
import "reflect-metadata";
import "dotenv/config";
import UserRouter from "./routes/user.routes";
import sessionRoutes from "./routes/session.routes";
import { handleError } from "./error";

const app = express();
app.use(express.json());
app.use('/users', UserRouter);
app.use('/login', sessionRoutes)
 
app.use(handleError)
export default app;
