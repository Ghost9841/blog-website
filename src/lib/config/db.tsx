import mongoose  from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://ghostaakash:9860104336as@blog-website.vqsvg.mongodb.net/')
    console.log("Data base Connected");
}