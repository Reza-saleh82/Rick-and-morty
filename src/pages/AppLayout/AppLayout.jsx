import NavSite from "../../component/NavSite/NavSite";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div>
      <div><NavSite /></div>
      <div style={{ height: "300px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;