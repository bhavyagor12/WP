import "./App.css";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Celsius from "./Celsius";
import Farenheit from "./Farenheit";
function App() {
  return (
    <Router>
      {" "}
      <Navbar />
      <Routes>
        <Route path="/" element={<Celsius />} />
        <Route path="/farenheit" element={<Farenheit />} />
        <Route path="/celcius" element={<Celsius />} />
      </Routes>
    </Router>
  );
}

export default App;
