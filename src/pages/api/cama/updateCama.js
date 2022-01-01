const CamaModel=require("../../../models/Cama");
import dbConnect from "../../../utils/dbConnect";
dbConnect();
export default async function handler(req,res){
    try{
        const {id,codeCama,estadoCama,nombrePaciente}=req.body;
        const response=await CamaModel.findByIdAndUpdate(id,{codeCama,estadoCama,nombrePaciente});
        res.status(200).send({
            message:"Cama actualizada correctamente"
        })
    }catch(err){
        console.log("error update ",err);
    }
}