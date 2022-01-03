import Adminside from "../../../components/AdminSide";
import LayoutAdmin from "../../../components/layout/LayoutAdmin";

export default function Asegurados({users}) {
  return (
    <LayoutAdmin>
      <section>

        <div className="admin-main">
          <div className="d-flex w-100 flex-column justify-content-center align-items-center">
            <h1 className="mb-3">Usuarios</h1>
            <div className="input-group px-5 mb-5">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar..."
                aria-label="Buscar..."
                aria-describedby="button-addon2"
              />
              <button className="btn btn-dark" type="button" id="button-addon2">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombres</th>
                  <th scope="col">Email</th>
                  <th scope="col">DNI</th>
                  <th scope="col">Rol</th>
                  <th scope="col">Teléfono</th>
                  <th scope="col">Dirección</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user,index)=>(
                  <tr key={user._id} >
                      <th scope="row">{index+1}</th>
                      <td>{user.nombres} {user.apellidos}</td>
                      <td>{user.email}</td>
                      <td>{user.dni}</td>
                      <td>{user.role}</td>
                      <td>{user.phone}</td>
                      <td>{user.address}</td>
                  </tr>
                ))}
                
              </tbody>
            </table>
          </div>
        </div>
      </section>
        <style jsx>{`
        section{
          padding:1rem;
        }
        `}</style>
    </LayoutAdmin>
  );
}
export async function getServerSideProps(){
  try{
    const response=await fetch("https://atento-salud.vercel.app/api/user");
    const users=await response.json();
    return{
      props:{
        users
      }
    }
  }catch(err){
    return{
      props:{
        message:"Ha ocurrido un error en el SSR",
        error:err
      }
    }
  }
}