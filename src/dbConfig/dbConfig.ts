import mongoose from "mongoose"
export async function dbConnect(){
    try{
        mongoose.connect(process.env.MONGODB_URI!);
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log('connected to the Database.');
        })
    }catch(error){
        console.log("Error connecting the Database");
        console.log(error)
    }
}