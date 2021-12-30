import Image from "next/image";
import { createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import Layout from "../components/layout";
import Link from "next/link";
import { useForm } from "../components/hooks/useForm";
import { auth } from "../../firebase";
import { useEffect } from "react";
const initForm={
    codAsegurado:"",
    dni:"",
    address:"",
    email:"",
    password:""
}
export default function Register(){
    const {handleChange,form}=useForm(initForm);
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                console.log("logeado ",user);
            }else{
                console.log("no logeado");
            }
        })
    },[])
    const register=async(e)=>{
        e.preventDefault();
        try{
            const userCredential=await createUserWithEmailAndPassword(auth,form.email,form.password);
            console.log(userCredential.user);
        }catch(err){
            console.log("error ocurrido al registrarse ",err);
        }

    }
    return(
        <Layout>

        <section>
            <form onSubmit={register} >
                <article className="block-center" ><h1>Registro de usuarios</h1>
                
                <span>
                    <img alt="estetoscopio sistema hospitalario" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F200602%2Fisolated%2Fpreview%2F1561844524649af9f33c1c1a0a4f528f-monocromo-de-estetoscopio-de-hospital-by-vexels.png&f=1&nofb=1" />
                </span>
                </article>
                <article>
                    <input onChange={handleChange} name="codAsegurado" value={form.codAsegurado}  placeholder="Código de asegurado" type="number"/>
                </article>
                <article>
                    <input onChange={handleChange} name="dni" value={form.dni} placeholder="DNI" type="number" />
                </article>
                <article><input onChange={handleChange} value={form.address} name="address" placeholder="Dirección actual" type="text"/></article>
                <article><input placeholder="Correo electrónico" onChange={handleChange} value={form.email} name="email" type="email"/></article>
                <article><input placeholder="Contraseña" onChange={handleChange} value={form.password} name="password" type="password"/></article>
                <article className="block-center" >
                    <button type="submit" className="btn btn-primary" >Registrarse</button>
                </article>
                <article className="block-center" >
                    <Link href="/login" >
                    <a>
                        ¿Ya posees una cuenta? Inicia sesión ahora!
                    </a>
                    </Link>
                </article>
            </form>
        </section>
        <style jsx>{`
        .block-center{
            
            justify-content:center;
        }
        img{
            width:100%;
            height:auto;
        }
        span{
            margin: 0 0 0 1rem;
            width:3rem;
            display:flex;
            top:1rem;
            right:1rem;
        }
        form{
            box-shadow:0 0.5rem 1.5rem rgba(0,0,0,0.2);
      
            padding:2rem;
            display:flex;
            flex-direction:column;
        }
        input{
            border: 1px  solid black;
            border-width: 0 0 1px 0;
            width:100%;
            outline:0;
        }
        article{
            padding:0.5rem 0;
            display:flex;
        }
        h1{
            font-weight:lighter;
        }
        section{
            min-height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        `}</style>
        </Layout>
    )
}