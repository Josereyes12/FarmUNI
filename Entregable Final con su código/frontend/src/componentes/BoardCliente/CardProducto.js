import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'



import "./card-producto.css";

function CardProducto({ producto }) {
  const MySwal = withReactContent(Swal);

  const handleAddToCart = () => {
  
    let cart = [];
      
    console.log("window", window);
    if (typeof window !== undefined) {
      // Si carrito está en localStorage
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      // Agregar producto al carrito
      cart.push({
        ...producto,
        cantidad: 1,
      });

      // Respaldaremos el carrito en el localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      // Notificamos al cliente que su producto se agregó al carrito
      MySwal.fire(
        <div>
          <Producto
            className="mx-auto d-block"
            width='120px'
            src={producto.imgSrc}
            alt={producto.descripcion}
          />
          <p className="text-success">¡Se agregó producto al carrito!</p>
        </div>
      );
    }
  };

  return (
    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
      <div className="card">
        <img className="card-img" src={producto.imgSrc} alt="Vans" />
        <div className="card-body">
          <h4 className="card-title">{producto.nombreProducto}</h4>
          <p className="card-text">{producto.descripcion}</p>
          <div className="buy d-flex justify-content-between align-items-center">
            <div className="price text-success">
              <h5 className="mt-4">S/ {producto.precio}</h5>
            </div>
            <button onClick={handleAddToCart} className="btn btn-danger mt-3">
              Agregar al carrito <FontAwesomeIcon icon={faCartPlus}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Producto = styled.img`
width: 200px;
heihgt: 200px;
padding:2px;
border: 2px solid #000;
border-radius:30px;
`;

export default CardProducto;
