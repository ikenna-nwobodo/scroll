import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Render from "./Render";
import ProjectPage from "./views/ProjectPage";

function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-black selection:bg-white selection:text-black min-h-screen flex flex-col items-center">
        <Navbar />
        <Routes>
          <Route path="/" index element={<Render />} />
          <Route path="projects" element={<ProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
