import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: 350px;
padding: 18px 0;
align-items: center;
border: 2px solid black;
box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
margin: 10px;
border-radius: 11px
`
const H2Text = styled.h2`
font-size: 2rem;
`
const BodyText = styled.span `
font-size: 2rem;
`
const Logo = styled.img `
width: 100px;
`

function InfoCard(props){
    const {logo, title} = props
    return (
        <Card>
            <Logo src={logo} />
            <H2Text>{title}</H2Text>
            <BodyText>{props.children}</BodyText>
        </Card>
    )
}

export default InfoCard