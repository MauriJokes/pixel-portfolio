// @ts-ignore
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Background from "./pages/Background";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";

const App: React.FC = () => {
  return (
    <Routes>
      {/* Routes inside Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="background" element={<Background />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
