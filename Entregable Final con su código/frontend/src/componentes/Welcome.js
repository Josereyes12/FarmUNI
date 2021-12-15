import React, { Component } from "react";
import AuthService from "../services/auth.service";

import Imagen_welcome from "./../Imagen_welcome.jpg";

export default class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        <header className="jumbotron">
          <h1 className="text-center">
            Bienvenido(a) <strong>{currentUser.usuario}</strong>
          </h1>        
        
          <h2 className="text-center">Farmuni le invita a probar nuestra interface de voz</h2>
          <img className="mx-auto d-block" src={Imagen_welcome} alt="" />
          </header>    
      </div>
    );
  }
}