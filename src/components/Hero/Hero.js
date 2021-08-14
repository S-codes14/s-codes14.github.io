import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        {/* <span className="grey-color"> &lt;</span> */}
          <span className="logo-name">Sibongmusa Lungelo</span>
          {/* <span className="grey-color">/&gt;</span> */}
        </SectionTitle>
        <SectionText>
        A developer who loves to transform ideas into reality using code. The path of a self-taught developer can be scary and intimidating. For me, getting into code turned out to be the right choice anyways: When the responsibility for your growth, career and learning sits 100% on your own shoulders, you also completely own your wins.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;