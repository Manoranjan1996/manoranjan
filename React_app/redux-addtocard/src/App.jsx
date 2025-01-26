import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import CardsDetails from "./components/CardsDetails";
import Cards from "./components/Cards";
import LoginDetails from "./LoginDetails";

function App() {
  return (
    <>
      <Header />
      <LoginDetails />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
      </Routes>
    </>
  );
}

export default App;
