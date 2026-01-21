import express from "express";

import postsController from '../controllers/postsController.js'

const router = express.Router()

// INDEX 
router.get("/", postsController.index);

// SHOW 
router.get("/:id", postsController.show)

// STORE 

// UPDATE 

// DESTROY


export default router;