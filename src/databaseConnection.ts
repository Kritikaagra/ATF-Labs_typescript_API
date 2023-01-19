import mongoose, { ConnectionOptions } from "mongoose";
import dotenv from "dotenv";

mongoose.Promise = global.Promise;
dotenv.config();

const { DB_URL } = process.env;

const connectToDatabase = async (): Promise<void> => {
   const options: ConnectionOptions = {
      useNewUrlParser: true,
      //useFindAndModify: false,
      //useCreateIndex: true,
      useUnifiedTopology: true 
     };
  await mongoose.connect(`${DB_URL}`, options);
  console.log('connected');
}

export { connectToDatabase };
