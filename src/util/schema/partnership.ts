import mongoose from 'mongoose';

const partnershipSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  companyName: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  partnershipType: {
    type: String,
    required: [true, 'Partnership type is required'],
    enum: ['dealership', 'distribution', 'studio']
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Additional information is required'],
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'approved', 'rejected'],
    default: 'pending'
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Partnership || mongoose.model('Partnership', partnershipSchema);