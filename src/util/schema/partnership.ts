import mongoose from "mongoose";

const PartnershipSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  companyName: {
    type: String,
    required: [true, "Company name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  partnershipType: {
    type: String,
    enum: ["dealership", "distribution", "studio"],
    required: [true, "Partnership type is required"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Add a pre-save middleware to update the updatedAt field
PartnershipSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.models.Partnership || mongoose.model("Partnership", PartnershipSchema);