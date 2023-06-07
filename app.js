const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');

require('dotenv').config();

/*Middlewares de aplicacion, habilitan cosas que antes no 
teniamos permitidas, ej... pueden ser loggers, cors */
//Cors habilita el cruce de informacion entre consultas http, se realizara entre servidores


const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(cors());
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))


const indexRouter = require('./routers/index');
const apiRouter = require('./routers/api');
const usersRouter = require('./routers/users');
const mathsRouter = require('./routers/maths');
const listRouter = require('./routers/list');
const objPostRouter = require('./routers/objPost');
const userRouter = require('./routers/user')
const {connect} = require('./db/db')


app.use("/", indexRouter);
app.use("/api", apiRouter);
app.use("/users", usersRouter);
app.use("/maths", mathsRouter);
app.use("/list", listRouter);
app.use("/ruta", objPostRouter);
app.use("/user", userRouter);
connect();

module.exports = app