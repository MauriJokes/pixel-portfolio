import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface LayoutContextType {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  showNavbar: boolean;
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(() =>
    JSON.parse(localStorage.getItem("showSidebar") || "false"),
  );
  const [showNavbar, setShowNavbar] = useState<boolean>(() =>
    JSON.parse(localStorage.getItem("showNavbar") || "false"),
  );
  const [active, setActive] = useState<number>(() =>
    JSON.parse(localStorage.getItem("active") || "0"),
  );

  useEffect(() => {
    localStorage.setItem("showSidebar", JSON.stringify(showSidebar));
    localStorage.setItem("showNavbar", JSON.stringify(showNavbar));
    localStorage.setItem("active", JSON.stringify(active));
  }, [showSidebar, showNavbar, active]);

  return (
    <LayoutContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        showNavbar,
        setShowNavbar,
        setActive,
        active,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = (): LayoutContextType => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};
