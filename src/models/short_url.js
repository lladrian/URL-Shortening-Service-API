import mongoose from "mongoose";

const ShortURLSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  }, 
  short_code: { 
    type: String, 
    required: true,
    unique: true
  },
  access_count: { 
    type: Number, 
    required: true
  },
  created_at: {
    type: Date,
    default: null
  },
  updated_at: {
    type: Date,
    default: null
  },
});


export default mongoose.model('ShortURL', ShortURLSchema);