import React from 'react';
import styled from 'styled-components'
import InfoCard from './InfoCard'

const Container = styled.section`
display: flex;
width: 100vw;
height: auto;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;
padding: 26px 0;
`

const Spans = styled.span`
margin: 2px;`

const CardContainer = styled.div`
display: flex;
flex-direction: column;
`
const Button = styled.button`
width: 150px;
margin-top: 10%;
font-size: 2rem;
border-radius: 6px;
text-decoration: none;
background: hsl(204, 96%, 27%);
border-color: hsl(204, 96%, 27%);
&:hover {
    transform: scale(1.05);
  }

`

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const A = styled.a`
color: hsl(210, 36%, 96%);
text-decoration: none;
`



function HoursSection(props) {
    return (
        <Container>
            <InfoCard title='Location'>
                <CardContainer>
                    <Spans>Place address here,</Spans>
                    <Spans>St. Louis, MO 63102</Spans>
                    <ButtonContainer>
                        <Button><A href="http://maps.google.com/?q=St. Louis, MO 63102">Directions</A></Button>
                    </ButtonContainer>
                </CardContainer>
            </InfoCard>

            <InfoCard title='Hours'>
            <CardContainer>
                <Spans>Mon:  8:00 AM – 5:00 PM</Spans>
                <Spans>Tue:	8:00 AM – 5:00 PM</Spans>
                <Spans>Wed:	Closed</Spans>
                <Spans>Thu:	8:00 AM – 5:00 PM</Spans>
                <Spans>Fri:	8:00 AM – 5:00 PM</Spans>
                <Spans>Sat:	8:00 AM – 12:00 PM</Spans>
                <Spans>Sun:	Closed</Spans>
            </CardContainer>
            </InfoCard>

            <InfoCard title='Contact Us'>
                <CardContainer>
                    <Spans>Phone: 999-999-9999</Spans>
                    <ButtonContainer>
                        <Button><A href="tel:#">Call Now</A></Button>
                    </ButtonContainer>
                </CardContainer>
            </InfoCard>
        </Container>
    )
}

export default HoursSection