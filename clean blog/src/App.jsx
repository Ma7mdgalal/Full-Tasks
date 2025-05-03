import Nav from "./component/Nav";
import Home from "./component/Home";
import Footer from "./component/Footer";
import About from "./component/About";
import Post from "./component/Post";
import Contact from "./component/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
