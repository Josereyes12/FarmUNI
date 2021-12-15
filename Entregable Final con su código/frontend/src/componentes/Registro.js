import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

// Servicio
import AuthService from "../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Este campo es obligatorio!
      </div>
    );
  }
};

const correo = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Este correo no es válido.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        El nombre de usuario debe tener entre 3 y 20 caracteres
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        La contraseña debe tener entre 6 y 40 caracteres
      </div>
    );
  }
};

const InitialState = {
  nombre: "",
  apellido: "",
  correo: "",
  telefono: "",
  dni: "",
  direccion: "",
  nombreUsuario: "",
  clave: "",
  successful: false,
  message: ""
}

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = InitialState;
  }

  onChangeUsername(e) {
    this.setState({
      nombreUsuario: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      correo: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      clave: e.target.value
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.nombre,
        this.state.apellido,
        this.state.correo,
        this.state.telefono,
        this.state.dni,
        this.state.direccion,
        this.state.nombreUsuario,
        this.state.correo,
        this.state.clave
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-register">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form onSubmit={this.handleRegister} ref={c => { this.form = c; }}>
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="nombre"
                    value={this.state.nombre}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="apellido">Apellido</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="apellido"
                    value={this.state.apellido}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="correo">Correo</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="correo"
                    value={this.state.correo}
                    onChange={this.onChangeEmail}
                    validations={[required, correo]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telefono">Telefono</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="telefono"
                    value={this.state.telefono}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dni">DNI</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="dni"
                    value={this.state.dni}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="direccion">Dirección</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="direccion"
                    value={this.state.direccion}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="nombreUsuario">Nombre de usuario</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="nombreUsuario"
                    value={this.state.nombreUsuario}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="clave">Contraseña</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="clave"
                    value={this.state.clave}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block">Registrarse</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}