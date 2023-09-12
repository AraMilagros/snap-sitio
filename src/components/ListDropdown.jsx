import React, { useState } from 'react'
import styled from 'styled-components'


const iconos = require.context('../assets/img/', true);


export default function ListDropdown(props) {

    // este usestate servira para mostrar (o no) una lista desplegable
    const [bandera, setBandera] = useState(false);
    // la funcion listDownUp sera llamada al darse un click en la lista correspondiente
    const listDownUp = () => {
        setBandera(!bandera);
    }

    return (
        <UlContent>

            <div className='ulFirst' onClick={() => listDownUp()}>
                <label className='label'>{props.title} </label>
                {/* dependiendo si la lista esta desplegada o no, se mostrara determinado icono */}
                <ImgStyles src={ bandera ? iconos('./icon-arrow-up.svg') : iconos('./icon-arrow-down.svg')} />
            </div>

            {
            // en caso de que bandera sea True, de mostrara el componente que muestra el resto de la lista,
                // caso contrario, si bandera es False, no se mostrara nada
                bandera ? 
                <UlStyles>
                    {
                        props.lista.map((item, i) => {
                            return(
                                <LiStyles key={i}>
                                    <ImgStyles src={item.img != null ? iconos(item.img) : null} />
                                    <label className='label'>{item.name}</label>
                                </LiStyles>
                            ); 

                        })
                    }
                </UlStyles>

                : ''
            }

        </UlContent>
    )
}

const UlContent = styled.div`
    width: 9em;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    
    .ulFirst{
        display: flex;
        cursor: pointer;
    }

    .label{
        padding: .2em .2em;
    }

`;

const UlStyles = styled.ul`
    list-style: none;
    padding: 1.5em 1em;
    margin-top: 2em;
    position: absolute;
    background-color: hsl(0, 0%, 98%);
    border-radius: 15px;
    box-shadow: 0px 0px 30px hsl(0, 0%, 41%, .5);
`;

const LiStyles = styled.li`
    width: 100%;
    text-align: justify;
    padding-top: 10px;
    padding-bottom: 10px;
`;

// Esto permite recibir props, cuestion que pueda cambiarse segun se necesite
    // Nota: hay otras formas de usar props
const ImgStyles = styled.img.attrs(props => ({
    src: props.src || null,
}))`
    margin:auto;
    margin-right: .3em;

`;
