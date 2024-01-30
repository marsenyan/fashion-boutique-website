import React from 'react';
import {
  VoucherSection,
  VoucherContainer,
  VoucherContent,
  VoucherLeft,
  ButtonWrapper,
  ImageButton,
  VoucherRight
} from './styles.ts';

import mobile from '../../assets/images/vouchers-img.png';
import desc from '../../assets/images/desc.png';
import app from '../../assets/icons/app-store.png';
import google from '../../assets/icons/google-play.png';

interface VoucherComponentProps {}

export const VoucherComponent: React.FC<VoucherComponentProps> = () => {
  return (
    <VoucherSection>
      <VoucherContainer className="container">
        <VoucherContent>
          <VoucherLeft>
            <img src={desc} alt="Description" />
            <ButtonWrapper>
              <ImageButton src={app} alt="Button 1" style={{ cursor: 'pointer' }}/>
              <ImageButton src={google} alt="Button 2" style={{ cursor: 'pointer' }}/>
            </ButtonWrapper>
          </VoucherLeft>
          <VoucherRight>
            <img src={mobile} alt="Voucher" />
          </VoucherRight>
        </VoucherContent>
      </VoucherContainer>
    </VoucherSection>
  );
};

