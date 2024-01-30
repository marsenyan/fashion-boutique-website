import React from 'react';
import {
  CommunitySection,
  ImagesWrapper,
  FooterContent,
  Column,
  CommunityContainer,
  CommunityContent,
  CommunityUp,
  BackgroundImage,
  TextWrapper,
  TextBlock,
  Form,
  SocialsContent,
  Input,
  Button,
  ButtonWrapper,
  CommunityDown,
  BackgroundImageDown
} from './styles.js';

import backY from '../../assets/images/backgroundY.png';
import backB from '../../assets/images/backB.png';

import fb from '../../assets/socials/fb.svg';
import inst from '../../assets/socials/inst.svg';
import twit from '../../assets/socials/tw.svg';
import lin from '../../assets/socials/in.svg';

interface CommunityProps {}

export const CommunityComponent: React.FC<CommunityProps> = () => {
  return (
    <CommunitySection>
      <CommunityContainer className="container">
        <CommunityContent>
          <CommunityUp>
            <BackgroundImage src={backY} alt="Backgroung" />
            <TextWrapper>
              <TextBlock>
                <h2>
                  JOIN SHOPPING COMMUNITY TO
                  <br></br> GET MONTHLY PROMO
                </h2>
                <p>
                  Type your email down below and be young wild generation
                </p>
                <Form>
                  <Input type="text" placeholder="Add your email here" />
                  <Button>Send</Button>
                </Form>
              </TextBlock>
            </TextWrapper>
            <ButtonWrapper></ButtonWrapper>
          </CommunityUp>
          <CommunityDown>
            <BackgroundImageDown src={backB} alt="Backgroung" />
            <SocialsContent>
              <h2>FASHION</h2>
              <p>
                Complete your style with awesome
                <br></br>clothes from us.
              </p>
              <ImagesWrapper>
                <img src={fb} alt="Facebook" style={{ cursor: 'pointer' }} />
                <img src={inst} alt="Instagram" style={{ cursor: 'pointer' }} />
                <img src={twit} alt="Twitter" style={{ cursor: 'pointer' }} />
                <img src={lin} alt="LinkedIn" style={{ cursor: 'pointer' }} />
              </ImagesWrapper>
            </SocialsContent>
            <FooterContent style={{ cursor: 'pointer' }}>
              <Column>
                <h3>Company</h3>
                <p>
                  About<br></br>
                  Contact us <br></br>
                  Support<br></br>
                  Careers
                </p>
              </Column>
              <Column>
                <h3>Quick Link</h3>
                <p>
                  Share Location<br></br>
                  Orders Tracking <br></br>
                  Size Guide<br></br>
                  FAQs
                </p>
              </Column>
              <Column>
                <h3>Legal</h3>
                <p>
                  Terms & conditions <br></br>
                  Privacy Policy<br></br>
                </p>
              </Column>
            </FooterContent>
          </CommunityDown>
        </CommunityContent>
      </CommunityContainer>
    </CommunitySection>
  );
};

