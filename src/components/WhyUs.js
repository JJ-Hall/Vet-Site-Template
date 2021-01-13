import React from 'react';
import styled from 'styled-components'
import ServiceCard from './ServiceCard'
import Money from '../media/sponsorship.svg'
import Doctor from '../media/doctor-female.svg'
import Vet from '../media/veterinary.svg'

const Container = styled.div`
display: flex;
justify-content: space-evenly;
width: 100vw;
height: auto;
@media (max-width: 548px) {
    display: none;}
`

function WhyUs(props){
    return (
        <Container>
            <ServiceCard logo={Money} title='Affordable'>We offer afforable prices that show we put the patient first.  </ServiceCard>
            <ServiceCard logo={Doctor} title='Honest'>We want every family to make the best descions for their pet. Our recomendations are based on what the animal needs</ServiceCard>
            <ServiceCard logo={Vet} title="Skilled">Feel comfortable when you drop off your animal. They will be well taken care of by highly skilled professionals</ServiceCard>
        </Container>
    )
}

export default WhyUs