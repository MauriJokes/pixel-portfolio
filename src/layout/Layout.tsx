import { Outlet } from "react-router-dom";
import { useLayout } from "../context/LayoutContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

const Layout: React.FC = () => {
  const { showSidebar, setShowSidebar, showNavbar } = useLayout();
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // Change this to your specific route

  return (
    <div className="flex">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="flex-1">
        <Navbar
          showNavbar={showNavbar}
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />
        <div
          className={
            isHomePage
              ? "relative min-h-[110vh] w-screen bg-[#262626]"
              : "h-screen w-screen bg-[#262626]"
          }
        >
          <Outlet /> {/* This renders child routes */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
