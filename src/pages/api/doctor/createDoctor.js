const DoctorModel=require("../../../models/Doctor");
import dbConnect from "../../../utils/dbConnect";
dbConnect();
export default async function handler(req,res){
    try{
        const {codeDoctor,dni,especialidad,phone,email,nombres,apellidos,disponibilidad}=req.body;
        const doctor=new DoctorModel({codeDoctor,dni,especialidad,phone,email,nombres,apellidos,disponibilidad});
        doctor.save();
        res.send(
            {
                message:"Doctor agregado"
            }
        )
    }catch(err){
        console.log("error ",err);
    }
}