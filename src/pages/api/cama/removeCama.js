const CamaModel=require("../../../models/Cama");
import dbConnect from "../../../utils/dbConnect";
dbConnect();
export default async function handler(req,res){
    try{
        const {id}=req.body;
        const cama=await CamaModel.findByIdAndRemove(id);
        res.status(200).send({
            message:"cama removida exitosamente"
        })
    }catch(err){
        console.log("error request ",err);
    }
}