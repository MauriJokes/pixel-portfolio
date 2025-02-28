import { Routes, Route } from "react-router";
import Home from "./pages/Home";
// import About from "./pages/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
