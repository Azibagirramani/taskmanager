const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
    default: "general",
  },
  notes:{
    type: String,
  },
  important: {
    type: Boolean,
    default: false,
  },
  due: {
    active: {
      type: Boolean,
      default: false,
    },
    day: {
      type: String,
      default: "tomorrow"
    },
    when: {
      type: Date,
      default: new Date(),
    },
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
  repeat: {
    active: {
      type: Boolean,
      default: false,
    },
    day: {
      type: String,
      default: "today"
    },
    when: {
      type: Date,
      default: new Date(),
    },
  },
  remind: {
    active: {
      type: Boolean,
      default: false,
    },
    day: {
      type: String,
      default: "tomorrow"
    },
    when: {
      type: Date,
      default: new Date(),
    },
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  updatedAt: {
    type: Date,
    default: new Date()
  }
});

const Task = model("tasks", taskSchema);

module.exports = Task;
