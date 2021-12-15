import React from 'react';
import ImagenEscudo from "./../ImagenEscudo.png"
import styled from 'styled-components'

const ClienteMaiNosotros = () => {
    return (
        <Contenedor className="container">
            <Titulo>¿QUIENES SOMOS?</Titulo>
            <div className="row row-cols-2 ">                
                    
                    <div className="col">
                        <p> 
                            Aliquip occaecat ipsum laboris aliquip nisi. Eiusmod nisi Lorem deserunt enim nulla minim in velit duis non pariatur anim Lorem magna. Eiusmod irure voluptate ea do cillum et amet voluptate cillum laborum reprehenderit.
                            Aliquip occaecat ipsum laboris aliquip nisi. Eiusmod nisi Lorem deserunt enim nulla minim in velit duis non pariatur anim Lorem magna. Eiusmod irure voluptate ea do cillum et amet voluptate cillum laborum reprehenderit. 
                        </p>
                    </div>
                    <div className="col">
                        <Image className="mx-auto d-block" src={ImagenEscudo} alt="" />
                    
                </div>
            </div>
        </Contenedor>
      );
}
const Titulo = styled.h1`
font-size: 30px;
font-family: Courier, "Lucida Console", monospace
font-weight: bold;  
`;

const Contenedor = styled.div`
justify-content: center;
max-width: 1000px;
width: 160%;    
`;

const Image = styled.img`
width: 200px;
heihgt: 200px;
padding:2px;
border: 1px solid #000;
border-radius:30px;
`;
export default ClienteMaiNosotros;