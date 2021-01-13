import React from 'react';

import styled from 'styled-components'
import Hero from './components/Hero'
import BioSection from './components/BioSection'
import WhyUs from './components/WhyUs'
import TextAndPic from './components/TextAndPic'
import HoursSection from './components/HoursSection';
import Footer from './components/Footer'

const Header = styled.div`
  height: 100px;
  background-color: green;
`

function App() {
  return (
    <div className="App">
      <Hero />
      <WhyUs />
      <BioSection />
      <TextAndPic logo="https://images.unsplash.com/photo-1516968612763-c1010f9f7e32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1964&q=80" title="Meet Ellie Kelly">Ellie Kelly has been a veterinarian for 25 years. Ellie graduated from blkah blah lorem simply dummy text of the printing 
      lorem simply dummy text of the printing and typesetting industry.lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
      scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
      unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
      software like Aldus PageMaker including versions of Lorem Ipsum</TextAndPic>
      <TextAndPic left title="How Can We help you?" logo="https://images.unsplash.com/photo-1597734340064-5bab3f2dd1cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1566&q=80">  
      lorem simply dummy text of the printing and typesetting industry.lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
      scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
      unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
      software like Aldus PageMaker including versions of Lorem Ipsum.</TextAndPic>
      <HoursSection/>
      <Footer />
    </div>
  );
}

export default App;
