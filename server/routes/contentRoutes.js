const express =require('express');
const router = express.Router();

const auth=require('../middleware/auth');
const upload=require('../middleware/uploadMiddleware');
const {uploadContent, getMyContent, getLiveContent, getContentBySubject} =require('../controllers/contentController');
const authorize = require('../middleware/roleAuth');

router.post('/upload', auth, authorize("teacher"), upload.single('file'), uploadContent);
router.get('/my-content', auth, authorize("teacher"), getMyContent);
router.get('/live/:teacherId', getLiveContent);  // due to public broadcasting, no auth required
router.get('/subject/:subject', getContentBySubject); // for students to view content by subject, no auth required

module.exports=router;