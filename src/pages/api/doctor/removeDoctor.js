const DoctorModel=require("../../../models/Doctor");
import dbConnect from "../../../utils/dbConnect";
dbConnect();
export default async function handler(req,res){
    try{
        const {id}=req.body;
        const doctor=await DoctorModel.findByIdAndRemove(id);
        res.status(200).send({
            message:"Doctor removido exitosamente"
        })
    }catch(err){
        console.log("error request ",err);
    }
}