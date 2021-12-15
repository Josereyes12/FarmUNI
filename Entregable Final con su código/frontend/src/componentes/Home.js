import React, { Component } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

//imgane de Inicio
import ImagenInicio from "./../ImagenInicio.png"
import ImagenMicro from "./../ImagenMicro.jpg"

import UserService from "../services/user.service";

//estilos
import styled from 'styled-components';

//iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMicrophone} from '@fortawesome/free-solid-svg-icons'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {

    const MySwal = withReactContent(Swal)

    MySwal.fire({
      title: <p>Farmuni</p>,
      footer: 'Copyright 2021',
      didOpen: () => {
        // `MySwal` is a subclass of `Swal`
        //   with all the same instance & static methods
        MySwal.clickConfirm()
      }
    }).then(() => {
      return MySwal.fire(
        <div>
          
          <p className="text-danger">
          FarmUNI Te saluda
          </p>
          <Image className="mx-auto d-block" src={ImagenMicro} alt="" />
          <p>
            Le recordamos que esta página cuenta con reconocimiento de voz
          </p>
          
      </div>
      )
    })

    UserService.getPublicContent().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
        <Icono className="text-center"><FontAwesomeIcon icon={faMicrophone}/></Icono>
          <h3 className="text-center">{this.state.content} BIENVENIDOS A FARMUNI</h3>
          <img className="mx-auto d-block" src={ImagenInicio} alt="" />
        </header>
      </div>
    );
  }
}

const Image = styled.img`
width: 200px;
heihgt: 200px;
padding:2px;
border: 1px solid #2b18d4;
border-radius:30px;
`;
const Icono = styled.h1`
margin:auto;
width: 250px;
heihgt: 250px;
border: 1px solid #000;
border-radius:10px;
`;