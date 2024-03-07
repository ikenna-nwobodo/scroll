import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Render from "./Render";
import ProjectPage from "./views/ProjectPage";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="relative bg-black selection:bg-white selection:text-black min-h-screen flex flex-col items-center">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Render />} />
          <Route path="projects" element={<ProjectPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
