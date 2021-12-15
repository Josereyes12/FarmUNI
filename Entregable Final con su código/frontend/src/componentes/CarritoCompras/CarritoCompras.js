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
          <br />
          <button onClick={handlecompra} class="btn2" style={{ float: "right" }}>
            Comprar
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

const Imagen = styled.img`
  width: 120px;
  heihgt: 120px;
  padding: 2px;
  border: 2px solid #000;
`;

export default CarritoCompras;
