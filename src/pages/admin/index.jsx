import Adminside from "../../components/AdminSide";

export default function index() {
  return (
    <>
      <div className="admin-content">
        <Adminside></Adminside>
        <div className="admin-main">Admin Content</div>
      </div>
    </>
  );
}
