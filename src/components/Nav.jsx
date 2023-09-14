import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

//iconos
import iconMenu from '../assets/img/icon-menu.svg';
import iconClose from '../assets/img/icon-close-menu.svg';

// datos de listas desplegables Y componente Lista
import { list1, list2 } from '../assets/js/listData';

// breakpoints para resposive 
import { breakpoints } from '../assets/js/breakpoints';

// componentes 
import ListDropdown from './ListDropdown';
import Login from './Login';

export default function Nav(props) {

    const [menuOpen, setMenuOpen] = useState(false);

    const openCloseMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            {
                props.mobile ? <MenuIcon src={menuOpen ? iconClose : iconMenu} alt="menu"
                    onClick={() => openCloseMenu()} /> : ''
            }
            {
                (props.mobile && menuOpen) ?
                    <DivMobile>
                        <div className='bg-fondo'></div>
                        <Mobile>
                            <ListDropdown
                                title="Feactures"
                                lista={list1}
                            />
                            <ListDropdown
                                title="Company"
                                lista={list2}
                            />
                            <label className='label lbl-nav'>Careers</label>
                            <label className='label lbl-nav'>About</label>
                            <Login />
                        </Mobile>
                    </DivMobile> : ''
            }
            {
                props.mobile == false ?
                    <NavItem>
                        <div className="navItem--item1">
                            <ListDropdown
                                title="Feactures"
                                lista={list1}
                            />
                            <ListDropdown
                                title="Company"
                                lista={list2}
                            />
                            <label className='label lbl-nav'>Careers</label>
                            <label className='label lbl-nav'>About</label>
                        </div>
                        <Login />
                    </NavItem> : ''
            }

        </>

    )
}

const DivMobile = styled.div`
    position: absolute;
    .bg-fondo{
        position: fixed;
        left: 0;
        top: 0;
        width: 35vw;
        height: 100%;
        background-color: rgb(88, 88, 88, 50%);
    }
`;

const Mobile = styled.div`
    margin-top: 3em;
    background: hsl(0, 0%, 98%);

    position: fixed;
    left: 35vw;
    width: 65vw;
    height: 100%;
    padding: 10% 5%;

    display: flex;
    flex-direction: column;
    .lbl-nav{
        width: 8em;
        cursor: pointer;
        border: 2px solid blue;
        padding: .2em;;
    }
    .label{

        border:2px solid green;
    }
    
`;


const NavItem = styled.div`
    border: 2px solid red;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .label{
        cursor: pointer;
    }
    .lbl-nav{
        /* border: 2px solid red; */
        margin: 0 1.5em;
        color: gray;
        &:hover{
            color:black;
        }
    }
    .navItem--item1{
        display: flex;
        align-items: center;
    }

    @media (max-width: ${breakpoints.xs}){
        border: 2px solid blue;
    }
    
`;

const MenuIcon = styled.img.attrs(props => ({
    src: props.src
}))`
    border: 2px solid blue;
    margin: auto 1em auto 0;
    @media (max-width: ${breakpoints.xs}){
        border: 2px solid green;
        width: 1.5em;
        height: 1.5em;

    }

`;
