import Sidebar from "../../../components/SideBar";

export default function MainCita() {
  return (
    <>
      <div className="user-content">
        <Sidebar></Sidebar>
        <div className="user-main">
          <div className="main-content w-100 d-flex flex-column justify-content-start align-items-center mb-auto px-5">
            <h1 className="mb-5">
              Cita Médica&nbsp;
              <i className="fas fa-stethoscope"></i>
            </h1>
            <div className="buttons w-100 d-flex justify-content-between align-items-center">
              <button className="btn btn-dark">Programar citas</button>
              <button className="btn btn-dark">Mis citas</button>
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
