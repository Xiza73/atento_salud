const Sidebar = () => {
  return (
    <>
      <div className="sidebar-content container-fluid text-center">
        <i className="ficon fas fa-bars"></i>
        <div className="icons">
          <i className="fas fa-home"></i>
          <i className="fas fa-border-all"></i>
          <i className="fas fa-cog"></i>
          <i className="fas fa-question-circle"></i>
        </div>
        <i className="eicon fas fa-sign-out-alt"></i>
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
            justify-content: space-between;
            align-items: center;
            background-color: #3d3b3b;
            padding: 3vh;
          }
          .sidebar-content .icons {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 50vh;
          }
          h3,
          p {
            margin-bottom: 2.1rem;
            color: white;
          }
          svg {
              color: white;
              width: 2.6rem !important;
              height: auto !important;
          }
        `}
      </style>
    </>
  );
};

export default Sidebar;
