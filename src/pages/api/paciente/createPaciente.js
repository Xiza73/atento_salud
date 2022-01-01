const PacienteModel=require("../../../models/Paciente");
import dbConnect from "../../../utils/dbConnect";
dbConnect();
export default async function handler(req,res){
    try{
        const {codAsegurado,fecha,hora,mes,year,codEnfermedad,doctor}=req.body;
        const paciente=new PacienteModel({codAsegurado,fecha,hora,mes,year,codEnfermedad,doctor});
        paciente.save();
        res.send(
            {
                message:"Paciente agregado"
            }
        )
    }catch(err){
        console.log("error ",err);
    }
}