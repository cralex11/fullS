import express from 'express'
import mongoose from "mongoose";
import bodyParse from 'body-parser'

const app = express();


// routes
import postsRouter from './routes/posts.js'

//middleware
app.use(bodyParse.json())
//user middleware
app.use('/posts', postsRouter);


//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connected to db')
})


export const start = () => {
    app.listen('3030', () => {
        console.log("Server Started")
    })
}
