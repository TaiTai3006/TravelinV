import express from "express";
// import { getAccount } from "../controllers/AccoutController.js";
import { getFeaturedPost } from "../controllers/BlogsContronller.js";
import { getRecentPost } from "../controllers/BlogsContronller.js";
import { getSlideImage } from "../controllers/BlogsContronller.js";
import { getRelatedPost } from "../controllers/BlogsContronller.js";
import { getGoto } from "../controllers/BlogsContronller.js";






const routerBlogs = express.Router()

// routerAccount.get('/user',getAccount);
routerBlogs.get('/Blogs/FeaturedPost',getFeaturedPost);
routerBlogs.get('/Blogs/RecentPost',getRecentPost);
routerBlogs.get('/SliderBlogs/SlideImages',getSlideImage);
routerBlogs.get('/SliderBlogs/RelatedPosts/:idProvince/:idPost',getRelatedPost);
routerBlogs.get('/SliderBlogs/Goto',getGoto);






export default routerBlogs