import Navbar from "../components/NavBar";

const Index = () => {
  return (
    <>
      <Navbar />
      <div id="start" className="container-fluid d-flex justify-content-between align-items-center px-5">
        <div className="content">
          <h1 className="text-center px-5">
            Nuestro equipo médico está capacitado para brindarte a ti a tu
            familia una atención médica más accesible y de calidad
          </h1>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-primary ">Reserva una cita ahora</button>
          </div>
        </div>
        <div className="img"></div>
      </div>

      <div id="aboutus" className="container-fluid d-flex flex-column justify-content-center align-items-center p-5">
        <div className="video mb-4"></div>
        <h2 className="px-5 text-center">
          Atención Hospitalaria Vida es un canal de atención a través del cual
          el paciente podrá reservar una cita y atenderse con un médico del
          staff. Esto permitirá que el paciente pueda recibir atención médica a
          través de una videollamada o de manera presencial
        </h2>
      </div>

      <style jsx>
        {`
          .img {
            background-image: url("https://www.cms.gov/files/image/hospital-price-tranparency-hospital-icon.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            width: 50rem;
            height: 20rem;
          }
          .video {
            width: 15rem;
            height: 22rem;
            background-color: black;
          }
          #aboutus {
            background-color: #7EB31E;
          }
          button {
            width: 120px;
          }
        `}
      </style>
    </>
  );
};

export default Index;
