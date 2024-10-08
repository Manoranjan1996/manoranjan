import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
function App() {
  return (
    <>
      <Navbar title="textUtil" />
      <div className="container">
        {/* <TextForm heading="Enter the text to analyse" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
