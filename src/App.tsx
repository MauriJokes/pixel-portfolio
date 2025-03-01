import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Background from "./pages/Background";
// import About from "./pages/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/background" element={<Background />} />
    </Routes>
  );
};

export default App;
