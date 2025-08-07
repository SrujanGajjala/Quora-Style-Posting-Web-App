import mongoose from "mongoose"
import Post from './models/post.js'
// const mongoose = require("mongoose")
// const Post = require('./models/post.js')

async function main(){
    await mongoose.connect("mongodb+srv://srujangajjala2004:Bx2qjkHR70WzSt53@cluster0.rx0szjp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
}

main()
    .then(()=>{console.log("connection successful")})
    .catch((err)=>{console.log(err)})

// let allPosts = [
//     {
//         username : "apnacollege",
//         content : "i love coding",
//         created_at : new Date()
//     },
//     {
//         username : "srujan",
//         content : "i love gaming",
//         created_at : new Date()
//     },
//     {
//         username : "rahul",
//         content : "i love editing",
//         created_at : new Date()
//     }
// ]

let allPosts = [
  {
    username: "srujan",
    content: "Hi I am Srujan! Welcome to my new project that is very similar to Quora. I have built this using Node.js and Express.js for the backend, with MongoDB Atlas to host my database on the web. I’ve implemented RESTful APIs for clean data interaction and designed the frontend using EJS templates to create a smooth and dynamic user experience.",
    created_at: new Date()
  },
  {
    username: "elonmusk",
    content: "People often ask why I work so many hours or take such high risks. The answer is simple: the future depends on it. Whether it's space exploration, clean energy, or AI safety, the goal is to push humanity forward. If we don’t act with urgency now, we may regret it later. Progress doesn’t come from comfort zones—it comes from relentless drive and a deep sense of purpose.",
    created_at: new Date()
  },
  {
    username: "taylorswift",
    content: "Music, for me, has always been a mirror to the soul. I write what I feel, even if it scares me. Vulnerability in songwriting allows people to connect on a human level. It’s not about perfection—it’s about being honest with yourself and others. When fans say a song helped them through a hard time, that's when I know I did something right.",
    created_at: new Date()
  },
  {
    username: "cristiano",
    content: "Behind every trophy, there's pain, sacrifice, and an insane amount of discipline. I wasn’t born with talent alone—I earned my place with training, nutrition, and constant self-improvement. Even now, I believe I can always be better. That’s the mentality that separates the good from the great. It’s not just football—it’s a lifestyle. You either give it your all or don’t bother showing up.",
    created_at: new Date()
  },
  {
    username: "sundarpichai",
    content: "At Google, we strive to build technology that improves lives—not just for the elite but for everyone. A product isn’t successful until it reaches a farmer in rural India or a student in Kenya. Innovation must be democratic and inclusive. The real test of technology is not what it can do, but who it can empower.",
    created_at: new Date()
  },
  {
    username: "emmawatson",
    content: "Activism isn’t a part-time hobby—it’s a lifelong commitment. Whether it’s gender equality, education, or environmental causes, I believe in using whatever platform I have to speak for those who don’t. The world doesn’t change with silence. It changes when people—especially women—demand better. And we’re just getting started.",
    created_at: new Date()
  },
  {
    username: "zuck",
    content: "The goal of Meta isn’t just to connect people—it’s to build the future of interaction. Whether it's through virtual reality, AI, or new forms of storytelling, we’re entering a new digital era. But with this innovation comes the responsibility to protect user privacy, ensure safety, and build ethically. We're not just building apps. We're shaping how the next generation will live, work, and play.",
    created_at: new Date()
  },
  {
    username: "kyliejenner",
    content: "When I launched my cosmetics brand, many thought it was just a trend. But for me, it was always about creating something lasting and empowering. Beauty isn’t about hiding who you are—it’s about celebrating it. I want everyone who uses my products to feel confident and bold. Because confidence is the real glow-up.",
    created_at: new Date()
  },
  {
    username: "msdhoni",
    content: "Captaincy taught me more about life than cricket. Decisions have to be made in seconds, and you take full responsibility for outcomes—win or lose. But what truly matters is how you carry your team, how you stay grounded, and how you keep learning. The game changes, the pressure builds, but character is what endures.",
    created_at: new Date()
  },
  {
    username: "srk",
    content: "I came to Mumbai with a suitcase and a dream. Everything I am today is because I believed in that dream even when no one else did. Acting is more than a career—it’s my lifeline. And if my journey has taught me anything, it’s this: don’t let anyone tell you who you can or cannot become. Magic happens when you persist.",
    created_at: new Date()
  },
  {
    username: "malala",
    content: "One child, one teacher, one book, and one pen can change the world. Education is not a privilege—it’s a right. I survived an attempt to silence me, and that only made my voice louder. My mission is clear: fight for every girl's right to learn, no matter where they are born. The future depends on educated minds, especially those of young women.",
    created_at: new Date()
  }
];


Post.insertMany(allPosts);