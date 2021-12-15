import React, { useState } from "react";
import styled from "styled-components";

import SugerenciaService from "../services/sugerencia.service";

const SugerenciaInicial = {
  fecha: new Date().toString(),
  mensaje: "",
};

const ClienteMainSugerencias = () => {
  const [field, setField] = useState(SugerenciaInicial);

  const handleChange = (e) => {
    console.log("e.target.value", e.target.value);
    console.log("field", field);
    setField({ ...field, mensaje: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    SugerenciaService.enviarSugerencia(field).then(
      () => {
        alert("Sugerencia enviada satisfactioramente...")
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        alert(resMessage);
      }
    );
  };

  return (
    <div>
    <Contenedor>
      <Texto>
        Si, Usted tiene alguna "QUEJA" o "SUGERENCIAS" haganoslo saber
      </Texto>
      <TextoMensaje>Llene el espacio en blanco</TextoMensaje>
      <form onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <Casilla htmlFor="mensaje" placeholder="Sugerencias"></Casilla>
          <div className="smooth-scroll list-unstyled">
            <input
              type="text"
              onChange={handleChange}
              className="form-control "
              name="mensaje"
              placeholder="Escriba en este espacio"
            />
          </div>
        </div>
        <Boton type="submit">Enviar</Boton>
      </form>
    </Contenedor>
    </div>
  );
};

const Contenedor = styled.div`
  justify-content: center;
  max-width: 1000px;
  width: 160%;
`;

const Texto = styled.h1`
font-size: 30px;
font-family: Courier, "Lucida Console", monospace
font-weight: bold;  
`;

const TextoMensaje = styled.h1`
font-size: 30px;
font-family: Courier, "Lucida Console", monospace
font-weight: bold;
color:red;  
`;

const Boton = styled.button`
  background-color: #2b18d4;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 30px;
`;


const Casilla = styled.form`
width: 100%;
height: 100%
padding: 12px
`;
export default ClienteMainSugerencias;
