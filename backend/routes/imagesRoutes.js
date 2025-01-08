const express = require("express");
const router = express.Router();
const {addImages} = require("../controllers/addImages");

   
// To Add user Images into Database
router.post('/addImages', addImages);