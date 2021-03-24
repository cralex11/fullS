import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

router.get('/', ((req, res) => {
    res.send("Posting...")
}))
router.post('/', ((req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    post.save()
        .then(data => {
            console.log(data)
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.status(200).json({message: err})
        })
    console.log(post)
}))

export default router;
