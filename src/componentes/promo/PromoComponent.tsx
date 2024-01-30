import React from 'react';
import {
  PromoSection,
  PromoContent,
  PromoText,
  PromoTitle,
  Highlight,
  PromoDesc,
  PromoBtnWrapper,
  PromoBtn
} from './styles.ts';

import promoImg from '../../assets/images/header-img.jpg';

interface PromoComponentProps {}

export const PromoComponent: React.FC<PromoComponentProps> = () => {
  return (
    <PromoSection>
      <div className="container">
        <PromoContent>
          <PromoText>
            <PromoTitle>
              <Highlight>
                <span>LET’S</span>
              </Highlight>
              EXPLORE
              <Highlight className="highlight--yellow">
                <span>UNIQUE</span>
              </Highlight>
              CLOTHES.
            </PromoTitle>
            <PromoDesc>Live for Influential and Innovative fashion!</PromoDesc>
            <PromoBtnWrapper>
              <PromoBtn href="#!">Shop Now</PromoBtn>
            </PromoBtnWrapper>
          </PromoText>
          <div className="promo__img">
            <img src={promoImg} alt="Promo" />
          </div>
        </PromoContent>
      </div>
    </PromoSection>
  );
};

