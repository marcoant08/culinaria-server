import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/culinaria_db");
mongoose.Promise = global.Promise;

// mongoose.connection.on("error", () => {
//   console.log("connection error");
// });

// mongoose.connection.on("open", () => {
//   console.log("we are connected");
// });

export default mongoose;
