import React from 'react';

import styled from 'styled-components'

const Header = styled.div`
  height: 100px;

  background-color: green;
`

const VideoSection = styled.div`
  height: 500px;
  background-color: blue;
`

const BioSection = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  text-align: center;
`
function App() {
  return (
    <div className="App">
      <Header />
      <VideoSection />

      <BioSection>

        <h1>About Our Animal Hospital in Wentzville</h1>

        <p>When illness or injury strikes your beloved family pet,
           it’s important to act fast and take them to a veterinarian
            you can trust. At A-70 Veterinary Hospital, they are proud
             to offer excellent pet care services to families and animals
              throughout Wentzville, Josephville, and St. Charles, MO.Whether your pet
               needs a regular checkup or an emergency service, these knowledgeable veterinarians
                are trained to handles the needs of various animals, breeds, and sizes. Their services
                 include check-ups, surgeries, heartworm prevention, dentistry, spaying, and neutering.
                  They even offer affordable pet vaccinations. If your pet is suffering from fleas or ticks,
                   A-70 Veterinary Hospital will design a personalized plan built to eliminate the problem
                    quickly as well as keep your pet happy, healthy, and safe. When your four-legged friend
                     needs care, treat them like the family they are and take them to A-70 Veterinary Hospital
                      in Wentzville, MO. To speak with one of their experienced veterinarians directly,
                       call (636) 327-0841 today. </p>
      </BioSection>
    </div>
  );
}

export default App;
