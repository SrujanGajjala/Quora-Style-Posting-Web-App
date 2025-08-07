import "dotenv/config"
import express from "express"
import mongoose from "mongoose";
import Post from "./models/post.js"
import path from "path"
import methodOverride from "method-override"
import { fileURLToPath } from 'url';
const app = express()
const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// MONGODB_URI = "mongodb+srv://srujangajjala2004:Bx2qjkHR70WzSt53@cluster0.rx0szjp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.use(express.static(path.join(__dirname,"public")))


async function main() {
  await mongoose.connect("mongodb+srv://srujangajjala2004:Bx2qjkHR70WzSt53@cluster0.rx0szjp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

main()
  .then(res => console.log("Connection successful"))
  .catch(err => console.log(err))

app.listen(port,()=>{
    console.log("app listening on port 8080")
})

app.get('/posts',async (req,res)=>{
    let posts = await Post.find().sort({ created_at: -1 });
    // console.log(chats);
    res.render("index.ejs",{posts})
});

app.get("/posts/new",async (req,res)=>{
    let posts = await Post.find();
    res.render("new.ejs",{posts});
})

app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    let newPost = new Post({
      username : username,
      content : content,
      created_at : new Date()
    })
    newPost.save().then((res)=>console.log("working")).catch(err => console.log(err))
    res.redirect("/posts")
    // res.render("index.ejs",{posts})
})

app.get("/posts/:id",async (req,res)=>{
    let {id} = req.params;
    let post = await Post.findById(id)
    res.render("show.ejs",{post});
})

app.get("/posts/:id/edit",async (req,res)=>{
    let {id} = req.params;
    let post = await Post.findById(id)
    res.render("edit.ejs",{post})
})

app.patch("/posts/:id",async (req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = await Post.findByIdAndUpdate(id,{content:newContent,created_at:new Date()})
    // let posts = await Post.find().sort({ created_at: -1 });  
    res.redirect("/posts")
})

app.delete("/posts/:id",async (req,res)=>{
    let {id} = req.params;
    let deletedPost = await Post.findByIdAndDelete(id)
    res.redirect("/posts")
})