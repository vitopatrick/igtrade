import mongoose from "mongoose";

const uri: any = process.env.MONGODB_URI;
const connectDb = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }

  if (connectionState === 2) {
    console.log("connecting");
    return;
  }

  try {
    mongoose.connect(uri, {
      dbName: "trading_db",
      bufferCommands: false,
    });

    console.log("connected");
  } catch (error) {
    console.log(error);
    throw new Error("Error Connecting to database");
  }
};

export { connectDb };
