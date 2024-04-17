import "./App.css";
import About from "./components/About";
import ChatButton from "./components/ChatButton";
import Extra from "./components/Extra";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Store from "./components/Store";

function App() {
  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal min-h-screen flex flex-col justify-between">
      <Navbar />

      <Hero/>
      <Store />

      <Extra/>

      <About />

      <Footer />

      <ChatButton/>
    </div>
  );
}

export default App;
