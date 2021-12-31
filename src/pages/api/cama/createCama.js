import dbConnect from "../../../utils/dbConnect";
const CamaModel=require("../../../models/Cama");
dbConnect();
export default async (req,res)=>{
    try{
        const cama=new CamaModel({codeCama:"ABC-1956",estadoCama:false});
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