import React from 'react';
import styled from 'styled-components'

const HeroContainer = styled.div`
height: 70vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background: url("https://lh3.googleusercontent.com/W_yMdlP0Cj0nC8zqxBJ7oPGmoPJMjxj3FZ9lL9d0kKJ4sSF6FFTfLtElq-_TFKm4b4Qh7cWR=w2060-h1000-p-no-v0");
background-size: cover;
background-position: center;

`
const HeroSection= styled.section`
height:100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: hsl(204,96%,27%, .7);
color: hsl(210, 36%, 96%);
text-align: center;
`

const H1Text = styled.h1`
font-size: 5rem;`

const PText = styled.p`
margin-top: 0;
font-size: 2.5rem;
`
const ButtonContainer = styled.div `
display: flex;
width: 100%;
justify-content: center;
flex-wrap: wrap;
`

const CallButton = styled.button`
font-size: 2.5rem;
margin: 0 5%;
background: hsl(210, 36%, 96%);
border: 2px solid hsl(204, 96%, 27%);
border-radius: 6px;
&:hover {
    transform: scale(1.05);
  }

@media (max-width: 478px) {
    margin: 3%;}
`
const A = styled.a`
color: sl(204, 96%, 27%);
text-decoration: none;
`

function Hero(props){
    return (
        <HeroContainer>
            <HeroSection>
                <H1Text>Veterinary Hospital</H1Text>
                <PText>Veterinarian in St. Louis, Missouri delivered with courtesy and respect!</PText>
                <ButtonContainer>
                    <CallButton><A href="tel:#">Call Today</A></CallButton>
                    <CallButton><A href="http://maps.google.com/?q=St. Louis, MO 63102">Directions</A></CallButton>
                </ButtonContainer>
            </HeroSection>
        </HeroContainer>
    )
}

export default Hero