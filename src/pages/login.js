import Link from "next/link";
import Layout from "../components/layout";

export default function Login(){
    const login=(e)=>{
        e.preventDefault();
    }
    return(
        <Layout>

        <section>
            <form onSubmit={login} >
                <article className="block-center" ><h1>Inicio de sesión</h1>
                
                <span>
                    <img alt="estetoscopio sistema hospitalario" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F200602%2Fisolated%2Fpreview%2F1561844524649af9f33c1c1a0a4f528f-monocromo-de-estetoscopio-de-hospital-by-vexels.png&f=1&nofb=1" />
                </span>
                </article>
                
                <article><input placeholder="Correo electrónico" type="email"/></article>
                <article><input placeholder="Contraseña" type="password"/></article>
                <article className="block-center" >
                    <button type="submit" className="btn btn-primary" >Iniciar sesión</button>
                </article>
                <article className="block-center" >
                    <Link href="/register" >
                        <a>
                            ¿Aún no estás registrado?
                        </a>
                    </Link>
                </article>
            </form>
        </section>
            <style jsx >{`
            a{
                text-decoration:none;
            }
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