import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    preparation: {
      type: Array,
      required: true,
    },
    moreInformation: {
      type: Array,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Recipe", schema);
