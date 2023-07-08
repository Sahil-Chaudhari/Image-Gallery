import mongoose from "mongoose";
import * as dotenv from 'dotenv';

const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(() => console.log("Mongodb connected"))
        .catch((err) => console.log(err))
}

export default connectDB