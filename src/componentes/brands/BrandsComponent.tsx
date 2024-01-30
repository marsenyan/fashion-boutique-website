import React from 'react';
import {
  BrandsSection,
  BrandsContainer,
  BrandsList,
  BrandItem,
  BrandLink,
  BrandImage
} from './styles.ts';

import hm from '../../assets/brands/HM.png';
import obey from '../../assets/brands/Obey.png';
import shopify from '../../assets/brands/Shopify.png';
import lacoste from '../../assets/brands/Lacoste.png';
import levis from '../../assets/brands/Levis.png';
import amazon from '../../assets/brands/Amazon.png';

interface BrandsComponentProps {}

export const BrandsComponent: React.FC<BrandsComponentProps> = () => {
  return (
    <BrandsSection>
      <BrandsContainer className="container">
        <BrandsList className="brands__list">
          <BrandItem>
            <BrandLink href="#!">
              <BrandImage src={hm} alt="" />
            </BrandLink>
          </BrandItem>
          <BrandItem>
            <BrandLink href="#!">
              <BrandImage src={obey} alt="" />
            </BrandLink>
          </BrandItem>
          <BrandItem>
            <BrandLink href="#!">
              <BrandImage src={shopify} alt="" />
            </BrandLink>
          </BrandItem>
          <BrandItem>
            <BrandLink href="#!">
              <BrandImage src={lacoste} alt="" />
            </BrandLink>
          </BrandItem>
          <BrandItem>
            <BrandLink href="#!">
              <BrandImage src={levis} alt="" />
            </BrandLink>
          </BrandItem>
          <BrandItem>
            <BrandLink href="#!">
              <BrandImage src={amazon} alt="" />
            </BrandLink>
          </BrandItem>
        </BrandsList>
      </BrandsContainer>
    </BrandsSection>
  );
};
