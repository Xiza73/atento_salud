const PacienteModel=require("../../../models/Paciente");
import dbConnect from "../../../utils/dbConnect";
dbConnect();
export default async function handler(req,res){
    try{
        const {id}=req.body;
        const paciente=await PacienteModel.findByIdAndRemove(id);
        res.status(200).send({
            message:"Paciente removido exitosamente"
        })
    }catch(err){
        console.log("error request ",err);
    }
}