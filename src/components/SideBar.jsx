const Sidebar = () => {
  return (
    <>
      <div className="sidebar-content container-fluid text-center">
        <div className="img"></div>
        <h3>José Estrada Limo</h3>
        <p>Mi historia clínica</p>
        <p>Atención al cliente</p>
        <p>Mis citas</p>
        <p>Configuración</p>
        <p>Preguntas frecuentes</p>
        <p>Familiares asegurados</p>
        <button className="btn btn-dark">Cerrar Sesión</button>
      </div>

      <style jsx>
        {`
          .img {
            background-image: url("https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            width: 10rem;
            height: 10rem;
          }
          .sidebar-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #3d3b3b;
          }
          h3,
          p {
            margin-bottom: 2.1rem;
            color: white;
          }
        `}
      </style>
    </>
  );
};

export default Sidebar;
