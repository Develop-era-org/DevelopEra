import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    project: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    info: {
      type: String,
    },
    emailed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Form = mongoose.model("Form", formSchema);

export default Form;
