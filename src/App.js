import Navbar from "./components/Navbar";
import Footer from "./views/Footer";
import Home from "./views/Home";
import Mid from "./views/Mid";

function App() {
  return (
    <div className="relative bg-black min-h-screen  flex flex-col items-center">
      <Navbar />
      <Home />
      <Mid />
      <Footer />
    </div>
  );
}

export default App;
