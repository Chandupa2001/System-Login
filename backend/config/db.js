import mongoose from "mongoose";

export const connectDB = async() => {
    try {
      await mongoose.connect('mongodb://chanduparanawaka2001:chane@cluster0-shard-00-00.zydsz8d.mongodb.net:27017,cluster0-shard-00-01.zydsz8d.mongodb.net:27017,cluster0-shard-00-02.zydsz8d.mongodb.net:27017/login-system?ssl=true&replicaSet=atlas-fgwxyz-shard-0&authSource=admin&retryWrites=true&w=majority');
      console.log("DB Connected");
    } catch (err) {
      console.error("Connection error", err);
    }
  }
  