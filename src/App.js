// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FetchApi from "./Components/FetchApi";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/general" element={<FetchApi category="general" />} />

          <Route path="business" element={<FetchApi category="business" />} />
          <Route
            path="entertainment"
            element={<FetchApi category="entertainment" />}
          />
          <Route path="health" element={<FetchApi category="health" />} />
          <Route path="science" element={<FetchApi category="science" />} />
          <Route path="sports" element={<FetchApi category="sports" />} />
          <Route
            path="technology"
            element={<FetchApi category="technology" />}
          />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
