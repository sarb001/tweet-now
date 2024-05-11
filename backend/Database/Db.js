import mongoose from "mongoose";

export const connectDb = async() => {
        await mongoose.connect(process.env.MONGO_URI,{
            dbName : 'tweet-now'
        }).then((con) => console.log(' Db Connecteddd Properly ')).catch((err) => 
        console.log('error =',err)
        )
}

