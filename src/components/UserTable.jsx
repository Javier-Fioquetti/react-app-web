import React from "react";

export default function UserTable() {
  return (
    <>
      <table class="table">
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
          <tr className="table-danger">
            <th scope="row">1</th>
            <td>Otto</td>
            <td>Smith</td>
            <td>@lev</td>
            <td>Smith</td>
            <td>@lev</td>
          </tr>
          <tr className="table-secondary">
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Smith</td>
            <td>@lev</td>
          </tr>
          <tr className="table-warning">
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>Smith</td>
            <td>@lev</td>
          </tr>
        </tbody>
      </table>
      ;
    </>
  );
}
