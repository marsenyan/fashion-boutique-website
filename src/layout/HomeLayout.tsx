import React from 'react';
import styled from 'styled-components';
import { Header } from '../componentes/header/Header';
import { PromoComponent } from '../componentes/promo/PromoComponent';
import { BrandsComponent } from '../componentes/brands/BrandsComponent';
import { ArrivalsComponent } from '../componentes/arrivals/ArrivalsComponent';
import { NewArrivals } from '../componentes/newArrivals/NewArrivals';
import { VoucherComponent } from '../componentes/voucher/VoucherComponent';
import { CommunityComponent } from '../componentes/community/CommunityComponent';


interface HomeLayoutProps {}

const HomeLayout: React.FC<HomeLayoutProps> = () => {
  return (
    <SectionContainer>
      <Header />
      <PromoComponent />
      <BrandsComponent />
      <ArrivalsComponent />
      <NewArrivals />
      <VoucherComponent/>
      <CommunityComponent />
    </SectionContainer>
  );
};

const SectionContainer = styled.section``;

export default HomeLayout;
