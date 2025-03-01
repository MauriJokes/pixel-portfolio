// import { createContext, useContext, useState, ReactNode } from "react";

// // Define the context type
// interface NavbarContextType {
//   title: string;
//   setTitle: (title: string) => void;
// }

// // Create context with a proper type
// const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

// // Define the props for NavbarProvider
// interface NavbarProviderProps {
//   children: ReactNode;
// }

// // NavbarProvider component
// export const NavbarProvider = ({ children }: NavbarProviderProps) => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(false);

//   return (
//     <NavbarContext.Provider
//       value={{ showNavbar, setShowNavbar, showSidebar, setShowSidebar }}
//     >
//       {children}
//     </NavbarContext.Provider>
//   );
// };

// // Custom hook to use Navbar context
// export const useNavbar = (): NavbarContextType => {
//   const context = useContext(NavbarContext);
//   if (!context) {
//     throw new Error("useNavbar must be used within a NavbarProvider");
//   }
//   return context;
// };
