import React, { useState, useEffect } from "react";
import "./carrito-compras.css";
import styled from "styled-components";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const getCartLS = () => {
  return JSON.parse(localStorage.getItem("cart")) || null;
};

const setCartLS = (value) => {
  localStorage.setItem("cart", JSON.stringify(value));
};

function CarritoCompras() {
  const [cartProducts, setCartProducts] = useState(getCartLS());
  const [cartTotal, setCartTotal] = useState(0);
  const MySwal = withReactContent(Swal);


  useEffect(() => {
    console.log("cartProducts", cartProducts);
    let totalAPagar =
      cartProducts?.length > 0
        ? cartProducts.reduce(
            (acc, current) =>
              parseFloat(acc, 2) + parseFloat(current.precio, 2),
            0.0
          )
        : 0.0;
    console.log("totalAPagar", totalAPagar);
    setCartTotal(totalAPagar);
  }, []);
  const handlecompra = () =>{
    MySwal.fire(
      <div>
        <p className="text-success">Comprado correctamente</p>
      </div>
      );
  };


  return (
  
    <div
      class="container container-fluid bg-white border"
      style={{ borderRadius: "8px" }}
    >
      <div class="cesta-beneficios-actualizar" data-accion="actualizar">
        <span>CARRITO DE COMPRAS</span>
        <span class="disponible">
          Disponibles <em>1000 puntos </em>
        </span>
      </div>
      <div class="table-responsive">
        <table
          class="table table-bordered table-condensed cesta"
          id="cesta-beneficios"
        >
          <thead>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Valor Unitario</th>
            <th>Total</th>
            <th> </th>
          </thead>
          {cartProducts?.length > 0 ? (
            cartProducts.map((cartProduct, index) => (
              <tr class="beneficio" key={index} data-elemento={index}>
                <td>
                  <Imagen
                    alt={cartProduct.nombreProducto}
                    src={cartProduct.imgSrc}
                  />
                  <div className="espacios">
                    <span>{cartProduct.nombreProducto}</span>
                  </div>
                  <br />
                  <span>DESCRIPCION: {cartProduct.descripcion}</span>
                  <br />
                  <span>ETIQUETAS: '{cartProduct.etiquetas}' </span>
                  <br />
                  <span>STOCK: {cartProduct.stock}</span>
                  <br />
                  <button class="btn btn-default">
                    Guardar para más tarde
                  </button>
                </td>
                <td class="cantidad">
                  <select
                    class="selectpicker"
                    data-width="fit"
                    id="cantidadNro"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </td>
                <td class="valor">S/ {cartProduct.precio}</td>
                <td class="total" width={100}>
                  S/ {cartProduct.precio}
                </td>
                <td>
                  {" "}
                  <button class="btn btn-danger">X</button>{" "}
                </td>
              </tr>
            ))
          ) : (
            <tr class="totales">
              <td colSpan={4}>No se encontraron productos en la canasta</td>
            </tr>
          )}

          <tr class="totales">
            <td></td>
            <td></td>
            <td class="t">Total</td>
            <td class="val">{cartTotal}</td>
          </tr>
        </table>
        <div class="pie-de-cesta">
          <span
            class="total4"
            style={{
              float: "right",
              fontSize: "24px",
            }}
          >
            Al finalizar esta transacción{" "}
            <em style={{ color: "green" }}>
              <b>450</b>
            </em>{" "}
            puntos
          </span>
          <br />
          <br />
          <br />
          <button class="btn btn-link continuar">Continuar comprando...</button>
          <Boton onClick={handlecompra} class="btn" style={{ float: "right" }}>
            Comprar
          </Boton>
        </div>
      </div>

      <button class="btn btn-primary suma">
        <i class="fa fa-plus fa-2x"></i>
      </button>
    </div>
  );
}

const Imagen = styled.img`
  width: 120px;
  heihgt: 120px;
  padding: 2px;
  border: 2px solid #000;
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

export default CarritoCompras;
