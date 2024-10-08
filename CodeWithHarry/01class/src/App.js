import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
function App() {
  return (
    <>
      <Navbar title="textUtil" />
      <div className="container">
        <TextForm heading="Enter the text to analyse" />
      </div>
    </>
  );
}

export default App;
