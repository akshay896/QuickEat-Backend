import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://akshaydileesh896:akshay@cluster0.zybhpie.mongodb.net/foodDatabase"
    )
    .then(() => console.log("Mongodb connected"));
};
