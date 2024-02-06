import Navbar from "./components/Navbar";
import Footer from "./views/Footer";
import Home from "./views/Home";
import Mid from "./views/About";
import Projects from "./views/Projects";
import Headroom from "react-headroom";

function App() {
  return (
    <div className="relative bg-black selection:bg-white selection:text-black min-h-screen flex flex-col items-center">
      {/* <Headroom>
        <Navbar />
      </Headroom> */}
      <Navbar />
      <Home />
      <Mid />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
