import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Header from './components/Header';
import Main from './components/Main';

export default function App() {
    return (
        <Conteiner>
            <Header />
            <Main />
        </Conteiner>
        
    )
}

const Conteiner = styled.main`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Epilogue', sans-serif;
    background-color: hsl(0, 0%, 98%);
`;
