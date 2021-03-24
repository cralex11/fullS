import express from 'express'
import mongoose from "mongoose";

// require('dotenv').config();

const app = express();
const router = express.Router()

//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => {
    console.log('connected to db')
})

app.use(router)
router.route('/')
    .get((req, res) => {
        res.send("get")
    })
    .post(((req, res) => {
        res.send('post')
    }))


export const start = () => {
    app.listen('3030', () => {
        console.log("Server Started")
    })
}
