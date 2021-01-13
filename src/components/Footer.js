import React from 'react';
import styled from 'styled-components'
import SiteLogo from '../media/A70.png'
import UpSvg from '../media/UpArrow.svg'

const Container = styled.div`
display: flex;
justify-content: space-around;
height: 80px;
width; 100vw;
background-color: hsl(209,28%,39%);
align-items: center;
`


const BodyText = styled.span `
font-size: 2rem;
color: hsl(210, 36%, 96%);

&#number {
    @media (max-width: 900px) {
        display: none;}
}
&#address {
    @media (max-width: 730px) {
        display: none;}
}
`
const Logo = styled.img `
width: 20px;
`

const A = styled.a`
text-decoration: none;
color: hsl(210, 36%, 96%);
&:hover {
    transform: scale(1.5);
  }
`



function Footer(props){
    const {logo, title} = props
    return (
        <Container>
            <BodyText>Veterinary Hospital</BodyText>
            <BodyText id="number"><A href="tel:#">999-999-9999</A></BodyText>
            <BodyText id="address"><A href="http://maps.google.com/?q=St. Louis, MO 63102">9284 Made Up Address, STlouis, MO 63385</A></BodyText>
            <A href="#"><Logo src={UpSvg} /></A>
        </Container>
    )
}

export default Footer
