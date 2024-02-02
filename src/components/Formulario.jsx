import React from "react";
import { useForm } from "react-hook-form";

export default function Formulario(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    props.addUser(data);
    alert("Enviando datos");

    reset();
  });

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="d-flex flex-column mb-3 align-items-center container-fluid p-4 rounded bg-info bg-gradient w-75 border border-black"
      >
        <h4>Ingresa tus datos</h4>
        <input
          type="text"
          placeholder="Nombre"
          className="d-block control-form w-50 align-text my-2 bg-with bg-gradient border border-dark rounded-pill"
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            minLength: {
              value: 3,
              message: "debe ingresar más de 2 caracteres",
            },
          })}
        />
        {errors.nombre && (
          <span className="fs-6 text-danger">{errors.nombre.message}</span>
        )}
        <input
          type="text"
          placeholder="Apellido"
          className="d-block control-form w-50 align-text my-2 bg-with bg-gradient border border-dark rounded-pill"
          {...register("apellido", {
            required: {
              value: true,
              message: "Apellido es requerido",
            },
            minLength: {
              value: 3,
              message: "debe ingresar más de 2 caracteres",
            },
          })}
        />
        {errors.apellido && (
          <span className="fs-6 text-danger">{errors.apellido.message}</span>
        )}
        <div className="d-flex p-3" {...register("chekPoints")}>
          <div className="form-check form-check-inline m-2">
            <input
              className="form-check-input"
              type="radio"
              value="option1"
              name="flexRadioDefault"
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Sólo Ida
            </label>
          </div>
          <div className="form-check form-check-inline m-2">
            <input
              className="form-check-input"
              type="radio"
              value="option2"
              {...register("flexRadioDefault")}
            />

            <label className="form-check-label" htmlFor="inlineRadio2">
              Ida y Vuelta
            </label>
          </div>
        </div>
        <div className="d-flex p-3">
          <label htmlFor="origen">
            <strong>Origen</strong>
          </label>
          <select
            className="d-inline control-form w-50 align-text my-2 bg-with bg-gradient border border-dark rounded-pill"
            {...register("paisOrigen", {
              required: {
                value: true,
                message: "Debe indicar un país",
              },
            })}
          >
            {errors.paisOrigen && (
              <span className="fs-6 text-danger">
                {errors.paisOrigen.message}
              </span>
            )}

            <option value="...">-</option>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="Mexico">México</option>
            <option value="Estados Unidos">Estados Unidos</option>
            <option value="España">España</option>
            <option value="Alemania">Alemania</option>
            <option value="Francia">Francia</option>
            <option value="Portugal">Portugal</option>
            <option value="Italia">Italia</option>
          </select>
          <label htmlFor="origen">
            <strong>Destino</strong>
          </label>
          <select
            className="d-block control-form w-50 align-text my-2 bg-with bg-gradient border border-dark rounded-pill"
            {...register("paisDestino", {
              required: {
                value: true,
                message: "ingrese un país",
              },
            })}
          >
            {errors.paisDestino && (
              <span className="fs-6 text-danger">
                {errors.paisDestino.message}
              </span>
            )}
            <option value="...">-</option>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="Mexico">México</option>
            <option value="Estados Unidos">Estados Unidos</option>
            <option value="España">España</option>
            <option value="Alemania">Alemania</option>
            <option value="Francia">Francia</option>
            <option value="Portugal">Portugal</option>
            <option value="Italia">Italia</option>
          </select>
        </div>
        {watch("flexRadioDefault") === "option2" && (
          <>
            <label htmlFor="origen">
              <strong>Origen</strong>
            </label>
            <input
              className="d-inline control-form w-50 align-text my-2 bg-with bg-gradient border border-dark rounded-pill"
              type="text"
              placeholder="País de Origen"
              value={watch("paisDestino")}
              readOnly
            />
            <label htmlFor="origen">
              <strong>Destino</strong>
            </label>
            <input
              className="d-inline control-form w-50 align-text my-2 bg-with bg-gradient border border-dark rounded-pill"
              type="text"
              placeholder="País de Destino"
              value={watch("paisOrigen")}
              readOnly
            />
          </>
        )}

        <button className="btn btn-primary" type="submit">
          Agregar Pasajero
        </button>
      </form>
    </>
  );
}
