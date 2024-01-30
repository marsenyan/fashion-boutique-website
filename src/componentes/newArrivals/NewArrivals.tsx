import React from 'react';
import {
  FavouriteSection,
  FavouriteContainer,
  FavouriteHeader,
  FavouriteCards
} from './styles.js';

import { Card } from '../card/Card';
import prom1 from '../../assets/images/promo-01.jpg';
import prom2 from '../../assets/images/promo-02.jpg';

interface NewArrivalsProps {}

export const NewArrivals: React.FC<NewArrivalsProps> = () => {
  return (
    <FavouriteSection>
      <FavouriteContainer className="container">
        <FavouriteHeader>
          <h2 className="title-2">Young’s Favourite</h2>
        </FavouriteHeader>
        <FavouriteCards>
          <Card title="Trending on Instagram" img={prom1} />
          <Card title="All Under $40" img={prom2} />
        </FavouriteCards>
      </FavouriteContainer>
    </FavouriteSection>
  );
};

