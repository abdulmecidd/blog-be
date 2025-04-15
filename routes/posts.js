const express = require("express");
const router = express.Router();
const Post = require("../config/schemas/Post");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    console.log(title, content);
    if (!title || !content) {
      res.status(400).json({ message: "These fields are required" });
      return;
    }
    const newPost = new Post({ title, content });
    await newPost.save();
    res
      .status(201)
      .json({ message: "Post başarıyla oluşturuldu", post: newPost });
  } catch (error) {
    res.status(500).json({ message: "Bir hata oluştu", error: error.message });
  }
});
module.exports = router;
