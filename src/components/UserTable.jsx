import React from "react";

export default function UserTable(props) {
  console.log(props.users);
  return (
    <>
      <table className="table">
        <thead>
          <tr className="table-primary">
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Origen</th>
            <th scope="col">Destino</th>
            <th scope="col">Ida/Ida y Vuelta</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((user) => (
              <>
                <tr key={user.id} className="table-danger">
                  <th scope="row">1</th>
                  <td>{user.nombre}</td>
                  <td>{user.apellido}</td>
                  <td>{user.origen}</td>
                  <td>{user.destino}</td>
                  <td>{user.flexRadioDefault}</td>
                  <td>
                    <button
                      className="btn btn-info d-inline m-1"
                      onClick={() => {
                        props.editFila(true);
                      }}
                    >
                      <strong>Editar</strong>
                    </button>
                    <button
                      className="btn btn-info d-inline m-1"
                      onClick={() => {
                        props.borrarUsuario(user.id);
                      }}
                    >
                      <strong>Borrar</strong>
                    </button>
                  </td>
                </tr>
              </>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
