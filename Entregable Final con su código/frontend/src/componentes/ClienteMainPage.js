import React from 'react';

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'


import { NavLink , Switch , Route } from 'react-router-dom';

import ClienteMaiNosotros from './ClienteMainNosotros';
import ClienteMainSugerencias from './ClienteMainSugerencias';
import ClienteMainVision from './ClienteMainVision';


const ClienteMainPage= () => {
    return (
      <div>
      <Icono className="text-center"><FontAwesomeIcon icon={faMicrophone}/></Icono>
        <Contenedor>
          <Menu>
            <NavLink to="/cliente/main/nosotros">Nosotros</NavLink>
            <NavLink to="/cliente/main/vision">Vision</NavLink>
            <NavLink to="/cliente/main/sugerencias">Sugerencias</NavLink>
          </Menu>
          
            <Switch>              
              <Route exact path="/cliente/main/nosotros" component={ClienteMaiNosotros}/>
              <Route exact path="/cliente/main/vision" component={ClienteMainVision}/>
              <Route exact path="/cliente/main/sugerencias" component={ClienteMainSugerencias}/>
            </Switch>
         
        </Contenedor>
        </div>
      );
}

const Contenedor = styled.div`
    max-width: 1200px;
    padding: 40px;
    width: 100%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
    
`;

const Icono = styled.h1`
margin:auto;
width: 250px;
heihgt: 250px;
border: 1px solid #000;
border-radius:10px;
`;

//background
//justify-content: center;

const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #2b18d4;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default ClienteMainPage;