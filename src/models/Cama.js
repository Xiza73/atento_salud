const mongoose=require("mongoose");
const camaSchema= new mongoose.Schema({
    codeCama:{
        type:String,
        required:true,
        trim:true
    },
    estadoCama:{
        type:Boolean,
        required:true,
        default:false
    },
    nombrePaciente:{
        type:String,
        trim:true
    }
},{
    timestamps:true,
    versionKey:false
});
module.exports=mongoose.models.CamaModel || mongoose.model("CamaModel",camaSchema);