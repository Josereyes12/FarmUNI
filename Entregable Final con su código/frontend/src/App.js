import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Voz from "./Voz";
// Components
import Login from "./componentes/Login";
import Register from "./componentes/Registro";
import ClienteMainPage from "./componentes/ClienteMainPage";
import Home from "./componentes/Home";

import BoardUser from "./componentes/BoardUser";
import BoardCliente from "./componentes/BoardCliente";
import BoardAdmin from "./componentes/BoardAdmin";
import Profile from "./componentes/Profile";
import Welcome from "./componentes/Welcome";
import CarritoCompras from "./componentes/CarritoCompras"

// Services
import AuthService from "./services/auth.service";



class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this); 

    this.state = {
      showAdminBoard: false,
      showClientBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    console.log(user);
    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.tipo.includes("TIPO_ADMIN"),
        showClientBoard: user.tipo.includes("TIPO_CLIENTE"),
      });
    }
  }
  
  
  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showAdminBoard, showClientBoard } = this.state;

    return (
      <div className="App">
        <nav className="navbar navbar-expand navbar-dark">
          <Link to={"/"} className="navbar-brand">
            FarmUNI
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Panel Administrador
                </Link>
              </li>
            )}

            {showClientBoard && (
              <React.Fragment>
                <li className="nav-item">
                  <Link to={"/cliente/main"} className="nav-link">
                    Menú Principal
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/carrito"} className="nav-link">
                    Carrito de Compras
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/cliente/busqueda"} className="nav-link">
                    Tienda Virtual
                  </Link>
                </li>
              </React.Fragment>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link"></Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto" style={{height: "36px"}}>
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                {currentUser.usuario}_Perfil
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  Cerrar sesión
                </a>
              </li>
              <li className="nav-link" style={{width: '180px'}}>
                <Voz />
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto" style={{height: "36px"}}>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Iniciar sesión
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Registrarse
                </Link>
              </li>
              <li className="nav-link">
                <Voz />
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/welcome" component={Welcome} />
            <Route path="/user" component={BoardUser} />
            <Route path="/admin" component={BoardAdmin} />

            <Route path="/cliente/busqueda" component={BoardCliente} />
            <Route path="/cliente/main" component={ClienteMainPage} />

            <Route path="/empleado" component={BoardAdmin} />
            <Route path="/carrito" component={CarritoCompras} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
