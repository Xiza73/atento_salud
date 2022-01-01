const CamaModel=require("../../../models/Cama");
import dbConnect from "../../../utils/dbConnect";
dbConnect();
export default async function handler(req,res){
    try{
        const response=await CamaModel.find();
        res.status(200).send(response);
    }catch(err){
        console.log("error en request ",err);
    }
}