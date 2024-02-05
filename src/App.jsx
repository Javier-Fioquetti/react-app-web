import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import UserTable from "./components/UserTable";
import Formulario from "./components/Formulario";
import EditUserForm from "./components/EditUserForm";

function App() {
  const userData = [
    {
      id: uuidv4(),
      nombre: "juan",
      apellido: "Pérez",
      origen: "Argentina",
      destino: "España",
      ida: "Ida y Vuelta",
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

  //Eliminar usuario
  const borrarUsuario = (id) => {
    const arrayFiltrado = users.filter((user) => user.id !== id);
    setUsers(arrayFiltrado);
  };

  //Editar usuario
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] =useState({
    id: null,
      nombre: "",
      apellido: "",
      origen: "",
      destino: "",
      ida: "", 
  });

  const editFila = (user) =>{
    setEditing(true)
    setCurrentUser ({
      id: user.id,
      nombre: user.nombre,
                 apellido: user.apellido,
                  origen: user.origen,
                  destino: user.destino,
                  ida: flexRadioDefault,
    })
  }

  //const editUser = (user) => {
    //user.id = uuidv4();
    //setUsers([...users, user]);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center pt-3">CRUD App with hooks</h1>
        <div className="row mt-3">
          <div className="col-lg-6 col-md-12 mt-2">
            {editing ? (
              <div>
                <EditUserForm currentUser={currentUser} />
              </div>
            ) : (
              <div>
                <Formulario addUser={addUser} />
              </div>
            )}
          </div>
          <div className="col-lg-6 col-md-12 mt-2">
            <UserTable
              users={users}
              borrarUsuario={borrarUsuario}
              editFila={editFila}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
