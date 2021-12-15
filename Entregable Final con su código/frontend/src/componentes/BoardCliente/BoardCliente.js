import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

// Componentes dependientes
import CardProducto from "./CardProducto";

// Data falsa
//import { mockData } from './mockData'

// Data hardcode
import { hardcodeData } from './hardcodeData'

// const toCurrencyPEN = (number) => {
//   return `S/ ${number}`;
// }

const BoardCliente = () => {
  const [state, setState] = React.useState({
    loading: true,
    message: null,
    //productos: mockData(40),
    productos: hardcodeData,
  });

  console.log("state.productos", state.productos);

  React.useEffect(() => {
    // ProductService.listarProductos().then(
    //   (data) => {
    //     console.log("ProductService.data", state.data);
    //     setState({ ...state, data });
    //   },
    //   (error) => {
    //     const resMessage =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();

    //     this.setState({
    //       loading: false,
    //       message: resMessage,
    //     });
    //   }
    // );
  }, []);

  return (
    <>
      <h1 className="text-center">TIENDA FARMUNI</h1>
      <Icono className="text-center"><FontAwesomeIcon icon={faMicrophone}/></Icono>
      <div className="container">
        <div className="row">
          {state.productos &&
            state.productos.map((item, index) => (
              <CardProducto key={index} producto={item} />
            ))}
        </div>
      </div>
    </>
  );
};



const Icono = styled.h1`
margin:auto;
width: 250px;
heihgt: 250px;
border: 1px solid #000;
border-radius:10px;
`;

export default BoardCliente;
