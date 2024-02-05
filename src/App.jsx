import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import UserTable from "./components/UserTable";
import Formulario from "./components/Formulario";

function App() {
  const userData = [
    {
      id: uuidv4(),
      nombre: "juan",
      apellido: "Pérez",
      origen: "Argentina",
      destino: "España",
      flexRadioDefault: "Ida y Vuelta",
    },
    {
      id: uuidv4(),
      nombre: "josé",
      apellido: "Gómez",
      origen: "Argentina",
      destino: "España",
      ida: "Ida y Vuelta",
    },
    {
      id: uuidv4(),
      nombre: "Pablo",
      apellido: "Ríos",
      origen: "Argentina",
      destino: "España",
      ida: "Ida y Vuelta",
    },
  ];
  const [users, setUsers] = useState(userData);

  //agregar usuario
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUser(user.filter((user) => user.id == !id));
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center pt-3">CRUD App with hooks</h1>
        <div className="row mt-3">
          <div className="col-lg-6 col-md-12 mt-2">
            <Formulario addUser={addUser} />
          </div>
          <div className="col-lg-6 col-md-12 mt-2">
            <UserTable users={users} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
