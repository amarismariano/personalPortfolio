import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome to <br />
      My personal Portfolio!
    </SectionTitle>
    <SectionText>
      Get to know me more and take a look at my recent works!
    </SectionText>
    <Button onClick={() => window.location ="https://www.linkedin.com/in/mariano-amaris-597478202/" }>Learn More</Button>
  </LeftSection>
  </Section>
);

export default Hero;