import React from 'react'
import styled from 'styled-components'

// breakpoints para resposive 
import { breakpoints } from '../assets/js/breakpoints';

export default function Login() {
    return (
        <Div>
            <LogIn>Login</LogIn>
            <Register>Register</Register> 
        </Div>
    )
}

const Div = styled.div`
    border: 2px solid blue;
    width: 12em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 1em;

    @media (max-width: ${breakpoints.xs}){
        border: 2px solid green;
        flex-direction: column;
        width: 10em;
        margin: 3em auto 0 0;

    }

`;
export const Register = styled.button`
    
    padding: 8px 20px;
    border-radius: 10px;
    cursor: pointer;
    color: hsl(0, 0%, 41%);
    font-size: 16px;
    background: none;

    &:hover{
        color: black;
        transition: all .5 ease;
    }

    @media (max-width: ${breakpoints.xs}){
        width: 100%;

    }

`;

const LogIn = styled.a`
    padding: .5em;
    cursor: pointer;
    color: hsl(0, 0%, 41%);
    &:hover{
        color: black;
        transition: all .5 ease;
    }
`;