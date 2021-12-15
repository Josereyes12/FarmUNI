import React, { Component } from "react";
import AuthService from "../services/auth.service";

export default class Profile extends Component {
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
          <h3 className="text-center">
            <strong>{currentUser.nombreUsuario}</strong>MI PERFIL
          </h3>
        </header>
        <div className="row">
          <div className="col-12">
            <div className="list-group"> 
        <p className="list-group-item list-group-item-success">
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p className="list-group-item list-group-item-success">
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p className="list-group-item list-group-item-success">
          <strong>Correo:</strong>{" "}
          {currentUser.correo}
        </p>
        <span className="list-group-item list-group-item-success">
        <strong>Tipo de usuario:</strong>
        <ul>
          {currentUser.tipo &&
            currentUser.tipo.map((tipo, index) => <li key={index}>{tipo}</li>)}
        </ul>
        </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}