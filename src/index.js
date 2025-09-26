/* First way to connect with the database mongo db

function connectDB(){}
connectDB()

const app=express();

;(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       app.on("error",(err)=>{
        console.log("Error talk to database ",err);
        throw err;
       })
       let PORT=process.env.PORT??800;
       app.listen(PORT,()=>{
        console.log(`App is running on port ${PORT}`);
        
       })
    } catch (error) {
        console.error("Error",error);
    }
})()


*/

import connectDb from "./db";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

connectDb();
