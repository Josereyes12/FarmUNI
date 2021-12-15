import './Voz.css';
import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMicrophoneAlt} from '@fortawesome/free-solid-svg-icons'

// Services
import AuthService from "./services/auth.service";

const Voz = () => {
    const moveHome = () => {
        window.open("/home", "_self");
    }
    const moveLogin = () => {
        window.open("/login", "_self");
    }
    const moveRegister = () => {
        window.open("/register", "_self");
    }
    const moveMenu = () => {
        window.open("/cliente/main", "_self");
    }
    const moveShop = () => {
        window.open("/cliente/busqueda", "_self");
    }
    const moveProfile = () => {
        window.open("/profile", "_self");
    }
    const moveNosotros = () => {
        window.open("/cliente/main/nosotros", "_self");
    }
    const moveVision = () => {
        window.open("/cliente/main/vision", "_self");
    }
    const moveSuggest = () => {
        window.open("/cliente/main/sugerencias", "_self");
    }
    const logOut = () => {
        AuthService.logout();
        window.open("/login", "_self");
    }


    const [display] = useState('') 
    const commands = [
        {
            command: 'home',          
            callback: () => moveHome()   
        },
        {
            command: 'login',          
            callback: () => moveLogin() 
        },
        {
            command: 'registrarse',          
            callback: () => moveRegister()   
        },
        {
            command: 'principal',          
            callback: () => moveMenu()   
        },
        {
            command: 'tienda',          
            callback: () => moveShop() 
        },
        {
            command: 'perfil',          
            callback: () => moveProfile()   
        },
        {
            command: 'nosotros',          
            callback: () => moveNosotros()   
        },
        {
            command: 'visión',          
            callback: () => moveVision() 
        },
        {
            command: 'sugerencias',          
            callback: () => moveSuggest()   
        },
        {
            command: 'salir',          
            callback: () => logOut()   
        }
    ]

    const {transcript} = useSpeechRecognition( { commands })
                           
    return (
        <div className="d-flex voz">
            <Icono onClick={SpeechRecognition.startListening} style={{marginRight: '8px'}}><FontAwesomeIcon icon={faMicrophoneAlt}/></Icono>
            <p>{transcript}</p>
            <p>{display}</p>
        </div>
    )
}

const Icono = styled.h4`
position: relative;
bottom: 6px;
color:#fff;

`;

export default Voz;