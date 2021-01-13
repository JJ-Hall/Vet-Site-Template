
import React from 'react';
import styled from 'styled-components'

const Container= styled.div`
display: flex;
width: 100vw;
height: auto;
background: hsl(209, 23%, 60%);
justify-content: center;
padding: 26px 0;
color: hsl(210, 36%, 96%);
flex-wrap: wrap;
@media (max-width: 747px) {
    display: none;}
`

const InfoCardContainer= styled.div`
width: 40%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 1604px) {
    width: 50%;}
@media (max-width: 1137px) {
        width: 100%;}

// border: 2px solid black;
`

const InfoCard= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
height: 50%;

`
const H2Text = styled.h3`
font-size: 2rem;
`
const BodyText = styled.p `
font-size: 2rem;
line-height: 3rem;
`
const PictureSection = styled.div `
display: flex;
width: 40%;
height: 100%;
// border: 2px solid black;
justify-content: center;
align-items: center;
@media (max-width: 1604px) {
    width: 50%;}
@media (max-width: 1137px) {
        width: 100%;}
`
const Picture = styled.img`
width: 600px;
height: 430px;
border-radius: 10px;
box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
`

function TextAndPic(props){
    const {logo, title, left} = props
    if (left) {
    return (
        <Container>
            <InfoCardContainer>
                <InfoCard> 
                    <H2Text>{title}</H2Text>
                    <BodyText>{props.children}</BodyText>
                </InfoCard>
            </InfoCardContainer>
            <PictureSection>
                <Picture src={logo} />
            </PictureSection>
        </Container>
    )}
    else return (
        <Container>
            <PictureSection>
                <Picture src={logo} />
            </PictureSection>
            <InfoCardContainer>
                <InfoCard> 
                    <H2Text>{title}</H2Text>
                    <BodyText>{props.children}</BodyText>
                </InfoCard>
            </InfoCardContainer>
        </Container>
    )
}

export default TextAndPic