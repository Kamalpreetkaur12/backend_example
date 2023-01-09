import mongoose from 'mongoose';


export const connectToDB = async () => {
    try {
        mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2p8ni9g.mongodb.net/${process.env.DB_NAME}`
        )
        .then(()=>console.log("Connected to the database 😄"))
        .catch((error)=> console.log("Oh error", error.message));

    } catch (error) {
        console.error('Error: ',error.message);
    }
}