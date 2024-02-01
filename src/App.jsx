import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/formulario";
import UserTable from "./components/UserTable";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-center pt-3">CRUD App with hooks</h1>
        <div className="row mt-3">
          <div className="col-lg-6 col-md-12 mt-2">
            <Formulario />
          </div>
          <div className="col-lg-6 col-md-12 mt-2">
            <UserTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
