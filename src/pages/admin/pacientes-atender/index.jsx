import Adminside from "../../../components/AdminSide";

export default function PacientesAtender() {
  return (
    <>
      <div className="admin-content">
        <Adminside></Adminside>
        <div className="admin-main">
          <div className="d-flex w-100 flex-column justify-content-center align-items-center">
            <h1 className="mb-3">Lista de pacientes a atender</h1>
            <div className="input-group px-5 mb-5">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar..."
                aria-label="Buscar..."
                aria-describedby="button-addon2"
              />
              <button className="btn btn-dark" type="button" id="button-addon2">
                <i class="fas fa-search"></i>
              </button>
            </div>
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Código</th>
                  <th scope="col">Detalles</th>
                  <th scope="col">Doctor</th>
                  <th scope="col">Piso</th>
                  <th scope="col">Fecha</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">0001</th>
                  <td>Rosa Pilar</td>
                  <td>A1WX_622</td>
                  <td>Ver detalles</td>
                  <td>Dr. Julio Gómez</td>
                  <td>04</td>
                  <td>Ver fecha</td>
                </tr>
                <tr>
                  <th scope="row">0002</th>
                  <td>Gino Colmena</td>
                  <td>A1WX_622</td>
                  <td>Ver detalles</td>
                  <td>Dr. Jhon Cutipa</td>
                  <td>04</td>
                  <td>Ver fecha</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
