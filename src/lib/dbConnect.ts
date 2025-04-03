import mongoose, { ConnectOptions } from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://enfieldempire77:ZikGaTuU20UgtGOD@royalenfield.qccsrp4.mongodb.net/?retryWrites=true&w=majority&appName=RoyalEnfield";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

const options: ConnectOptions = {
  bufferCommands: false,
  autoIndex: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
  retryWrites: true,
  retryReads: true,
  writeConcern: {
    w: 1,
  },
};

async function dbConnect() {
  try {
    const conn = await mongoose.connect(MONGODB_URI, options);
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDB disconnected. Attempting to reconnect...");
    });

    return conn;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

export default dbConnect;
