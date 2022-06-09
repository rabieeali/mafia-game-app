import "./App.css";
import ChooseCard from "./Components/ChooseCard";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/choosecard" element={<ChooseCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
