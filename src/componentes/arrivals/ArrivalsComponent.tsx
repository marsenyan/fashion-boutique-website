import React from 'react';
import cat01Img from '../../assets/categories/cat-01.jpg';
import cat02Img from '../../assets/categories/cat-02.jpg';
import cat03Img from '../../assets/categories/cat-03.jpg';

import {
  ArrivalsSection,
  ArrivalsContainer,
  ArrivalsHeader,
  ArrivalsCards
} from './styles.ts';
import { Card } from '../card/Card.tsx';


interface ArrivalsComponentProps {}

export const ArrivalsComponent: React.FC<ArrivalsComponentProps> = () => {
  return (
    <ArrivalsSection>
      <ArrivalsContainer className="container">
        <ArrivalsHeader>
          <h2 className="title-2">NEW ARRIVALS</h2>
        </ArrivalsHeader>
        <ArrivalsCards>
          <Card title="Hoodies & Sweetshirt" img={cat01Img} />
          <Card title="Coats & Parkas" img={cat02Img} />
          <Card title="Tees & T-Shirt" img={cat03Img} />
        </ArrivalsCards>
      </ArrivalsContainer>
    </ArrivalsSection>
  );
};


