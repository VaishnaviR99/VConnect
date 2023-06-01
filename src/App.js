import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import "./styles/App.scss"
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Details from "./components/Details";


const App = () => {


  return (
    <>
      <Router>
        <Header/>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/details" element={<Details />} />
          <Route path="/contactt" element={<Contact/>} />
        </Routes>
        <About/>
        <Services/>
        <Details/>
        <Contact/>
        <Footer/>
        </Router >
        

      </>
      );
};

      export default App;