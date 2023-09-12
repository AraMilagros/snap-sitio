import React from 'react'
import styled from 'styled-components'
import { Register } from './Login';

const iconos = require.context('../assets/img/', true);

export default function Main() {
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

            <ImageMain src={iconos('./image-hero-desktop.png')} />
            
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
`;

const ImageMain = styled.img.attrs(props => ({
    src: props.src,
}))`
    grid-area: imgArea;
    width: 450px;
    margin: auto;
`;

const ImageIconos = styled.img.attrs(props => ({
    src: props.src,
}))`
    margin: 20px;
`;

