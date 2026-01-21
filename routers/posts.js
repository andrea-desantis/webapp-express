import express from "express";

import postsController from '../controllers/postsController.js'

const router = express.Router()

// INDEX 
router.get("/", postsController.index);
// SHOW 

// STORE 

// UPDATE 

// DESTROY


export default router;