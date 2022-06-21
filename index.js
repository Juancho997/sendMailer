import 'dotenv/config';
import express from "express";
import morgan from "morgan";
import router from './routes/index.js';

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
// app.use(express.static('./public'))
app.use('/public', express.static('public'));


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router)

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send({message});
});


app.listen(process.env.PORT, ()=>{
    console.log(`Server on port ${process.env.PORT}`)
});