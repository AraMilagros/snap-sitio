import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Register } from './Login';

// breakpoints para resposive 
import { breakpoints } from '../assets/js/breakpoints';

const iconos = require.context('../assets/img/', true);

export default function Main() {

    const [imgHero, setImgHero] = useState('');
    useEffect(() => {
        screen.width < 768 ? setImgHero(iconos('./image-hero-mobile.png')) : setImgHero(iconos('./image-hero-desktop.png'))
    })

    return (
        <MainContainer>
            <Div>
                <div className='text-main'>
                    <label className='div-title'>
                        Make remote work
                    </label>

                    <p className='div-parrafo'>
                        Get your team in sync, no metter your location.
                        Streamline processes, create team rituals, and
                        watch productivity soar.
                    </p>

                </div>

                <div className='btn-iconos'>
                    <BtnLearn>Learn more</BtnLearn>
                    <div>
                        <ImageIconos src={iconos('./client-databiz.svg')} />
                        <ImageIconos src={iconos('./client-audiophile.svg')} />
                        <ImageIconos src={iconos('./client-meet.svg')} />
                        <ImageIconos src={iconos('./client-maker.svg')} />
                    </div>
                </div>
            </Div>

            <ImageMain src={imgHero} />

        </MainContainer>
    )
}

const MainContainer = styled.div`
    /* display: flex; */
    display: grid;
    grid-template-areas: 'textArea imgArea';
    /* grid-template-columns: 50% 50%; */
    width: 90%;
    margin: auto;
    @media ((min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md})){
        width: 100vw;
        border: 2px solid red;
        grid-template-areas:
                            "imgArea"
                            "textArea";
    }
`;

const Div = styled.div`
    grid-area: textArea;

    /* este display: flex afectara a text-main y btn-iconos */
    display: flex;
    flex-direction: column;

    /* dentro de text-main */
    .div-title{
        font-size: 80px;
        font-weight: 700;
        width: 6.5em;

    }
    .div-parrafo{
        width: 25em;
        font-size: 18px;
        margin-top: 50px;
    }

    /* esta clase afecta al titulo y parrafo */
    .text-main{
        /* este display: flex afecta a div-title y div-parrafo */
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        flex: 1 1 70%;
    }

    .btn-iconos{
        flex: 1 1 30%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media ((min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md})){
        .div-title{
            font-size: 30px;
            width: 100vw;
            margin: .5em auto 0 0;
            border: 2px solid blue;
            text-align: center;
        }
        .div-parrafo{
            width: 100vw;
            font-size: 14px;
            margin-top: 1em;
            text-align: center;
        }
    }

`;

const BtnLearn = styled(Register)`
    width: 150px;
    padding: 10px;
    background: black;
    color:white;

    &:hover{
        background: white;
        color:black;
        transition: all .5s ease;
    }

    @media ((min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md})){
        margin: 1.5em auto;
    }
`;

const ImageMain = styled.img.attrs(props => ({
    src: props.src,
}))`
    grid-area: imgArea;
    width: 450px;
    margin: auto;

    @media ((min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md})){
        width: 100vw;
        margin: 0%;
        border: 2px solid black;
    }
`;

const ImageIconos = styled.img.attrs(props => ({
    src: props.src,
}))`
    margin: 20px;
    @media ((min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md})){
        margin: 8px;
        width: 3.5em;
    }
`;

