const EnfermedadModel=require("../../../models/Enfermedad");
import dbConnect from "../../../utils/dbConnect";
dbConnect();
export default async function handler(req,res){
    try{
        const {id,codeEnfermedad,nombreEnfermedad}=req.body;
        const response=await EnfermedadModel.findByIdAndUpdate(id,{codeEnfermedad,nombreEnfermedad});
        res.status(200).send({
            message:"Enfermedead actualizada correctamente"
        })
    }catch(err){
        console.log("error update ",err);
    }
}