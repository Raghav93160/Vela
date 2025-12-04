import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home/Home";
import Header from "./components/Header/Header";
// import "./App.css";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
    </BrowserRouter>
      
    </>
  );
};

export default App;
