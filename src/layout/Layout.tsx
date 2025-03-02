import { Outlet } from "react-router-dom";
import { useLayout } from "../context/LayoutContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

const Layout: React.FC = () => {
  const { showSidebar, setShowSidebar, showNavbar } = useLayout();

  return (
    <div className="flex">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="flex-1">
        <Navbar
          showNavbar={showNavbar}
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />
        <Outlet /> {/* This renders child routes */}
      </div>
    </div>
  );
};

export default Layout;
