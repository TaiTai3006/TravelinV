import express from "express";
// import { getAccount } from "../controllers/AccoutController.js";
import { getFeaturedPost } from "../controllers/BlogsContronller";
import { getRecentPost } from "../controllers/BlogsContronller";
import { getSlideImage } from "../controllers/BlogsContronller";
import { getRelatedPost } from "../controllers/BlogsContronller";
import { getGoto } from "../controllers/BlogsContronller";






const routerBlogs = express.Router()

// routerAccount.get('/user',getAccount);
routerBlogs.get('/:userName/Blogs/FeaturedPost',getFeaturedPost);
routerBlogs.get('/:userName/Blogs/RecentPost',getRecentPost);
routerBlogs.get('/SliderBlogs/SlideImages',getSlideImage);
routerBlogs.get('/SliderBlogs/RelatedPosts/:idProvince/:idPost',getRelatedPost);
routerBlogs.get('/SliderBlogs/Goto',getGoto);






export default routerBlogs