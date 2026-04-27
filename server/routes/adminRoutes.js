const express =require('express');
const router=express.Router();

const auth= require("../middleware/auth");
const authorize =require("../middleware/roleAuth");
const {getPendingContent, approveContent, rejectContent, getAllContent, getContentByStatus } =require('../controllers/adminController');

router.get("/pending", auth, authorize("admin"), getPendingContent);
router.put("/approve/:id", auth, authorize("admin"), approveContent);
router.put("/reject/:id",auth, authorize("admin"), rejectContent);
router.get("/all",auth, authorize("admin"), getAllContent);
router.get("/status/:status", auth, authorize("admin"), getContentByStatus);


module.exports= router;