import mongoose from 'mongoose';

// Project Schema
const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a project title'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a project description'],
    },
    image: {
      type: String,
      default: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    tags: [String],
    github: String,
    demo: String,
    featured: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Skill Schema
const skillSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, 'Please provide a skill category'],
      enum: ['Frontend', 'Backend', 'Tools & Others'],
    },
    skills: [
      {
        type: String,
        required: true,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Contact Message Schema
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
    },
    subject: {
      type: String,
      required: [true, 'Please provide a subject'],
    },
    message: {
      type: String,
      required: [true, 'Please provide a message'],
    },
    status: {
      type: String,
      enum: ['new', 'read', 'replied'],
      default: 'new',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// User Schema (for admin authentication)
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 6,
      select: false,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
export const Skill = mongoose.models.Skill || mongoose.model('Skill', skillSchema);
export const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
export const User = mongoose.models.User || mongoose.model('User', userSchema);
