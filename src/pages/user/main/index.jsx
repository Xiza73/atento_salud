import { onAuthStateChanged } from "@firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { auth } from "../../../../firebase";
import Sidebar from "../../../components/SideBar";

export default function Main() {
  const {push}=useRouter();
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        console.log("usuario logeado");
      }else{
        console.log("usuario no logeado ");
        push("/login");
      }
    })
  })
  return (
    <>
      <div className="user-content">
        <Sidebar></Sidebar>
        <div className="user-main">
          <div className="main-content d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-5">Sistema hospitalario</h1>
            <div className="img mb-5"></div>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar..."
                aria-label="Buscar..."
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-dark"
                type="button"
                id="button-addon2"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .img {
            background-image: url("https://emojigraph.org/media/facebook/stethoscope_1fa7a.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            width: 10rem;
            height: 10rem;
          }
        `}
      </style>
    </>
  );
}
