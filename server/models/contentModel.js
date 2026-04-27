const mongoose=require("mongoose");

const contentSchema=new mongoose.Schema({

 title:{
   type:String,
   required:true
 },

 description:String,

 subject:{
  type:String,
  required:true
 },

 fileUrl:String,

 uploadedBy:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"User"
 },

 status:{
  type:String,
  enum:["pending","approved","rejected"],
  default:"pending"
 },

 rejectionReason:String,

 approvedBy:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"User"
 },

 startTime:Date,

 endTime:Date,

 rotationDuration:{
   type:Number,
   default:5
 },

 rotationOrder:Number

},{timestamps:true})

module.exports=mongoose.model("Content",contentSchema);