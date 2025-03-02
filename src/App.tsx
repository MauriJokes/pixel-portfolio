import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Background from "./pages/Background";
import Layout from "./layout/Layout";
// import About from "./pages/About";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/background" element={<Background />} />
//     </Routes>
//   );
// };

const App: React.FC = () => {
  return (
    <Routes>
      {/* Routes inside Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="background" element={<Background />} />
      </Route>
    </Routes>
  );
};

export default App;
