import mongoose from "mongoose";
const connection={};
async function dbConnect(){
    if(connection.isConnected){
        return;
    }
    try{

        const db=await mongoose.connect("mongodb+srv://atentoSalud:a1b2c3d4@cluster0.kvhnr.mongodb.net/atentoSalud?retryWrites=true&w=majority",{});
        connection.isConnected=db.connections[0].readyState;
        console.log(connection.isConnected);
    }catch(err){
        console.log("error db ",err);
    }
}
export default dbConnect;