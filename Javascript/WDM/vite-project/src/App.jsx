import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndiaGov from "./Home/IndiaGov";

const App = () => {
  const money = 10000;
  const addarcard = 100;
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<IndiaGov money={money} addarcard={addarcard} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
