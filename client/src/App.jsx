
import React from "react";
import { Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBarra from "./components/NavBarra"
import Container from "react-bootstrap/Container";


function App() {
  return (
    <>
      <React.StrictMode>
        <div className="App">
          <NavBarra />
          <Container>
            <Outlet />
          </Container>
        </div>
      </React.StrictMode>
    </>
  );
}

export default App;
