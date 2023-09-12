import React, { useState } from 'react'
import styled from 'styled-components'

import logo from '../assets/img/logo.svg';
import iconMenu from '../assets/img/icon-menu.svg';
import iconClose from '../assets/img/icon-close-menu.svg';

import ListDropdown from './ListDropdown';
import Login from './Login';

import { list1, list2 } from '../assets/js/listData';

export default function Header() {

    const [bandera, setBandera] = useState(true);

    // true: cerrado false: desplegado 
    const [menuAbrir, setMenuAbrir] = useState(true);
    const desplegar = () => {
        setMenuAbrir(!menuAbrir)
    }
    return (
        <HeaderContent>
            <LogoS src={logo} alt="logo" />
            <Div>
                {
                    bandera ?
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
                        </Div> : ''
                }

                {
                    bandera ? <Login /> : <LogoS src={menuAbrir ? iconMenu : iconClose} onClick={() => desplegar()} />
                }
            </Div>
        </HeaderContent>
    )
}

const LogoS = styled.img.attrs(props => ({
    src: props.src,
}))`
    margin: 0 1em;
`;

const HeaderContent = styled.header`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    border: 2px solid black;

`;

const Div = styled.div`
    padding: 1em;
    width: 100%;
    display: flex;
    align-items: center;

    .label{
        width: 7em;
        /* margin: auto; */
        
        cursor: pointer;
    }

    .secondary{
        color:gray;
        &:hover{
            color: black;
        }
    }
`;

