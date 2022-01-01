const CamaModel=require("../../../models/Cama");
import dbConnect from "../../../utils/dbConnect";
dbConnect();
export default async function handler(req,res){
    try{
        const {codeCama,estadoCama,nombrePaciente=""}=req.body;
        const cama=new CamaModel(nombrePaciente===""?{codeCama,estadoCama}:{codeCama,estadoCama,nombrePaciente});
        cama.save();
        res.send(
            {
                message:"Cama creada"
            }
        )
    }catch(err){
        console.log("error ",err);
    }
}