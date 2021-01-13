
import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: 20vw;
align-items: center;
text-align: center;
margin: 60px 0;
`
const H3Text = styled.h3`
font-size: 2rem;
`
const BodyText = styled.span `
font-size: 2rem;
`
const Logo = styled.img `
width: 100px;
`

function ServiceCard(props){
    const {logo, title} = props
    return (
        <Card>
            <Logo src={logo} />
            <H3Text>{title}</H3Text>
            <BodyText>{props.children}</BodyText>
        </Card>
    )
}

export default ServiceCard