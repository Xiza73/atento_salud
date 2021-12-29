import Sidebar from "../../components/SideBar";

export default function index() {
  return (
    <>
      <div className="user-content">
        <Sidebar></Sidebar>
        <div className="user-main">User Content</div>
      </div>
    </>
  );
}
