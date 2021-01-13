import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
width: 100vw;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: hsl(209,28%,39%);
color: hsl(210, 36%, 96%);

padding: 16px 0;
`

const TextContainer = styled.div`
width: 66%;
text-align: center;
@media (max-width: 1137px) {
    width: 98%;}
`

const H2Text = styled.h2`
font-size: 2rem;
`

const PText = styled.p`
font-size: 2rem;
line-height: 3rem;
`

function BioSection(props){
    return (
        <Container>
            <TextContainer>
                <H2Text>About Our Animal Hospital</H2Text>
                <PText><p>lorem simply dummy text of the printing and typesetting industry.lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
      scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
      unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
      software like Aldus PageMaker including versions of Lorem Ipsum    lorem simply dummy text of the printing and typesetting industry.lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
      scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
      unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
      software like Aldus PageMaker including versions of Lorem Ipsum </p></PText>
            </TextContainer>
        </Container>
    )
}

export default BioSection