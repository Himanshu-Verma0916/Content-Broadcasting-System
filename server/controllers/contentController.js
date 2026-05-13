const Content =require('../models/contentModel');
const mongoose =require('mongoose');

// Teacher uploads content

const uploadContent=async(req,res)=>{
    try {
        const {title, description, subject, startTime, endTime, rotationDuration, rotationOrder}= req.body;

        if(!title || !subject ||!req.file || !startTime || !endTime){
            return res.status(400).json({success:false, message:"All required fields missing"});
        }

        const content = await Content.create({
            title,
            description,
            subject,    
            fileUrl:req.file ? req.file.path : "",
            uploadedBy:req.user._id,
            startTime,
            endTime,

            rotationDuration:rotationDuration || 5,
            rotationOrder:rotationOrder || 1
        });

        res.status(201).json({success:true, message:"Content uploaded successfully", data:content});

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:error.message});
    }
}

// Teacher views own content

const getMyContent =async(req,res)=>{
    try {
        const data =await Content.find({uploadedBy:req.user._id}).sort({createdAt:-1});
        res.status(200).json({success:true,count:data.length, data});

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:error.message});
    }
}

// Rotational Logic for live content

const getLiveContent =async(req,res)=>{
    try {
       const {teacherId}=req.params;
       const {subject}= req.query;

       console.log("teacherId:", teacherId);
        console.log("subject:", subject);

       let query = {
        uploadedBy: teacherId,
        status:"approved"
    };
       
       if(subject){
        query.subject=subject;
       }

       let contents =await Content.find(query).sort({rotationOrder:1});

       if(!contents.length){
        return res.status(404).json({success:false, message:"No content Available"});
       }

       const now= new Date();

       contents= contents.filter(content=> content.startTime <= now && content.endTime >= now);

       if(!contents.length){
        return res.status(404).json({success:false, message:"No live content found"});
       }
       console.log("live contents:", contents);

       let duration= contents[0].rotationDuration; // Assuming all contents have same rotation duration, you can modify as per your requirement

       let currentMinute=Math.floor(Date.now()/60000); // Get the current minute

       let index= Math.floor(currentMinute/duration) % contents.length; // Calculate the index based on rotation duration
       
       const activeContent =contents[index];

       res.status(200).json({success:true, data:activeContent});

    } catch (error) {
       console.log(error);
        res.status(500).json({success:false, message:error.message}); 
    }
}


// Filter content by Subject

const getContentBySubject =async(req,res)=>{
    try {
       const {subject}= req.params;

       const data =await Content.find({subject, status:"approved"}).sort({createdAt:-1});
       res.status(200).json({success:true, count:data.length, data});

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:error.message});
    }
}


module.exports={uploadContent, getMyContent, getLiveContent, getContentBySubject};