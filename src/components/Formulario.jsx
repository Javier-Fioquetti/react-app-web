import React from "react";

export default function Formulario() {
  return (
    <>
      <form className="d-flex flex-column mb-3 align-items-center container-fluid p-2 rounded bg-info bg-gradient w-50 border border-black">
        <h4>Ingresa tus datos</h4>
        <input
          type="check"
          placeholder="Ingrese su nombre"
          className="d-block control-form w-50 align-text my-2 bg-with bg-gradient border border-dark rounded-pill"
        />
        <input
          type="text"
          placeholder="Nombre"
          className="d-block control-form w-50 align-text my-2 bg-with bg-gradient border border-dark rounded-pill"
        />
        <input
          type="text"
          placeholder="Apellido"
          className="d-block control-form w-50 align-text my-2 bg-with bg-gradient border border-dark rounded-pill"
        />
        <input
          type="text"
          placeholder="Origen"
          className="d-block control-form w-50 align-text my-2 bg-with bg-gradient border border-dark rounded-pill"
        />
        <input
          type="text"
          placeholder="Destino"
          className="d-block control-form w-50 align-text my-2 bg-with bg-gradient border border-dark rounded-pill"
        />
        <button className="btn btn-primary" type="submit">
          Agregar Pasajero
        </button>
      </form>
    </>
  );
}
