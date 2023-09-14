import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

// iconos
import iconLogo from '../assets/img/logo.svg';

// breakpoints para resposive 
import { breakpoints } from '../assets/js/breakpoints';

//componentes
import Nav from './Nav';

export default function Header() {

    const [mobile, setMobile] = useState(false);
    
    window.addEventListener('resize', () =>{
        (screen.width < 768) ? setMobile(true) : setMobile(false);
        console.log(mobile);
        console.log(screen.width)
        console.log(breakpoints.md)
    })

    return (
        <NavContainer>
            <Logo src={iconLogo} alt="logo-snap" />
            <Nav 
                mobile={mobile} />
        </NavContainer>
    )
}

const NavContainer = styled.nav`
    /* border: 2px solid black; */
    height: 3em;
    display: flex;
    justify-content: space-between;
    position:relative;

    @media ((min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md})){
        border:2px solid red;
        width: 100vw;
    }

    @media (max-width: ${breakpoints.sm}){
        border: 2px solid green;
    }
`;

const Logo = styled.img.attrs(props => ({
    src: props.src
}))`

    @media (max-width: ${breakpoints.xs}){
        width: 2.5em;
        height: 2.5em;
        border: 2px solid blue;
        align-self: center;
        margin-left: 2%;
    }
`;