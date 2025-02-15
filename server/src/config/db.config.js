import dotenv from "dotenv"
import chalk from "chalk";
dotenv.config()
import mongoose from "mongoose";

const URI = process.env.URI

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log(chalk.cyan("app connected to database successfully"))
    } catch (err) {
        console.log(err)
        process.exit()
    }

}


export default connectDb;