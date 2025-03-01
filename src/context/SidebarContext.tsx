// import { createContext, useContext, useState, ReactNode } from "react";

// // Define the context type
// interface SidebarContextType {
//   title: string;
//   setTitle: (title: string) => void;
// }

// // Create context with a proper type
// const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// // Define the props for NavbarProvider
// interface NavbarProviderProps {
//   children: ReactNode;
// }

// // NavbarProvider component
// export const NavbarProvider = ({ children }: NavbarProviderProps) => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(false);

//   return (
//     <SidebarContext.Provider value={{ title, setTitle }}>
//       {children}
//     </SidebarContext.Provider>
//   );
// };

// // Custom hook to use Navbar context
// export const useNavbar = (): SidebarContextType => {
//   const context = useContext(SidebarContext);
//   if (!context) {
//     throw new Error("useNavbar must be used within a NavbarProvider");
//   }
//   return context;
// };
