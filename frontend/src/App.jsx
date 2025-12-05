import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home.jsx";
import ProcductListing from "./components/Products/ProcductListing.jsx";
// import "./App.css";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productlisting" element={<ProcductListing />} />
      
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  );
};

export default App;
