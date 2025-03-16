import { Outlet } from "react-router-dom";
import { useLayout } from "../context/LayoutContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import moment from "moment";

const Layout: React.FC = () => {
  const { showSidebar, setShowSidebar, showNavbar } = useLayout();
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // Change this to your specific route
  const currentYear = moment().year();
  console.log("🚀 ~ currentYear:", currentYear);

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
              : "h-full w-screen bg-[#262626]"
          }
        >
          <Outlet /> {/* This renders child routes */}
          {!isHomePage && (
            <div className="bottom-0 mb-4 flex items-center justify-center gap-2">
              <FaRegCopyright className="text-xs text-white/60" />
              <p className="font-montserrat text-xs tracking-widest text-white/60">
                {currentYear} Nik Adam Danish
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
