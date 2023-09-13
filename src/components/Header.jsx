import React, { useState } from 'react'
import styled from 'styled-components'
import MediaQuery from '../assets/js/breakpoints';

import logo from '../assets/img/logo.svg';
import iconMenu from '../assets/img/icon-menu.svg';
import iconClose from '../assets/img/icon-close-menu.svg';

import ListDropdown from './ListDropdown';
import Login from './Login';

import { list1, list2 } from '../assets/js/listData';

export default function Header() {

    const [bandera, setBandera] = useState(false);

    // true: cerrado false: desplegado 
    const [menuAbrir, setMenuAbrir] = useState(false);
    const desplegar = () => {
        setMenuAbrir(!menuAbrir);
        console.log(MediaQuery);
    }
    return (
        <HeaderContent>
            <LogoS src={logo} alt="logo" />
            <Div>
                {
                    bandera ? <ListaHeader /> : ''
                }

                {
                    bandera ? <Login /> : <MenuHambu src={menuAbrir ? iconMenu : iconClose} onClick={() => desplegar()} />
                }

{/* Lo que me falta hacer es cambiar los estilos en el estilo movil */}
{/* la idea que tenia es usar mediaquery para retocar los estilos */}
{/* ahora solo falta saber como aplicar los media query */}
                { 
                    (bandera!=true && menuAbrir!=true) ? <ListaHeader /> : '' 
                }


            </Div>
        </HeaderContent>
    )
}

function ListaHeader() {
    return (
        <Div>
            <ListDropdown
                title="Feactures"
                lista={list1}
            />
            <ListDropdown
                title="Company"
                lista={list2}
            />

            <label className='label secondary'>Careers</label>
            <label className='label secondary'>About</label>
        </Div>
    )

}


const LogoS = styled.img.attrs(props => ({
    src: props.src
}))`
    margin: 0 1em;
`;

const MenuHambu = styled.img.attrs(props => ({
    src: props.src
}))`
    border: 2px solid red;
`;

const HeaderContent = styled.header`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    border: 2px solid black;
    height: 4.5em;

`;

const Div = styled.div`
    padding: 1em;
    /* width: 100%; */
    width: auto;
    display: flex;
    align-items: center;
    
    .label{
        width: 5em;
        cursor: pointer;
    }

    .secondary{
        color:gray;
        margin-left: 10px;
        &:hover{
            color: black;
        }
    }


    /* @media ${MediaQuery.breakpoints}{
        border: 2px solid green;
    } */
`;

