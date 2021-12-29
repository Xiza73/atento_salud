import Adminside from "../../../components/AdminSide";

export default function Enfermedades() {
  return (
    <>
      <div className="admin-content">
        <Adminside></Adminside>
        <div className="admin-main">
          <div className="d-flex w-100 flex-column justify-content-center align-items-center">
            <h1 className="mb-3">Enfermedades a atender</h1>
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
                  <th scope="col">Síntomas</th>
                  <th scope="col">Especialista</th>
                  <th scope="col">Piso</th>
                  <th scope="col">Horario</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">0001</th>
                  <td>Enfermedad_01</td>
                  <td>A1WX_622</td>
                  <td>Ver Síntomas</td>
                  <td>Dr. Julio Gómez</td>
                  <td>04</td>
                  <td>Ver horario</td>
                </tr>
                <tr>
                  <th scope="row">0002</th>
                  <td>Enfermedad_02</td>
                  <td>A1WX_622</td>
                  <td>Ver Síntomas</td>
                  <td>Dr. Jhon Cutipa</td>
                  <td>06</td>
                  <td>Ver horario</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
