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
          <Route
            exact
            path="/"
            element={<FetchApi category="general" />}
          ></Route>
          <Route
            // exact
            path="/general"
            element={<FetchApi key="general" category="general" />}
          ></Route>
          <Route
            // exact
            path="business"
            element={<FetchApi key="business" category="business" />}
          ></Route>
          <Route
            // exact
            path="entertainment"
            element={<FetchApi key="entertainment" category="entertainment" />}
          ></Route>
          <Route
            // exact
            path="health"
            element={<FetchApi key="health" category="health" />}
          ></Route>
          <Route
            // exact
            path="science"
            element={<FetchApi key="science" category="science" />}
          ></Route>
          <Route
            // exact
            path="sports"
            element={<FetchApi key="sports" category="sports" />}
          />
          <Route
            // exact
            path="technology"
            element={<FetchApi key="technology" category="technology" />}
          ></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
