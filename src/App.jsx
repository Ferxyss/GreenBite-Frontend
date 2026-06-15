import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Productos from "./pages/Productos";
import Suscripciones from "./pages/Suscripciones";

function App() {
  return (
    <BrowserRouter>

      <div className="app-container">

        <nav className="navbar">

          <div className="logo">
            🌱 GreenBite
          </div>

          <div className="nav-links">

            <Link className="nav-link" to="/">
              Productos
            </Link>

            <Link
              className="nav-link"
              to="/suscripciones"
            >
              Suscripciones
            </Link>

          </div>

        </nav>

        <Routes>

          <Route
            path="/"
            element={<Productos />}
          />

          <Route
            path="/suscripciones"
            element={<Suscripciones />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;