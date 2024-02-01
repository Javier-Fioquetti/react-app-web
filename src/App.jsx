import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/formulario";
import UserTable from "./components/UserTable";

function App() {
  return (
    <>
      <div className="d-flex flex-nowrap flex-column w-auto">
        <h1 className="text-center pt-3">CRUD App with hooks</h1>
        <div className="d-flex flex-row m-5 row-12">
          <div className="flex-column m-2 col-6">
            <Formulario />
          </div>
          <div className="flex-column m-2 col-6">
            <UserTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
