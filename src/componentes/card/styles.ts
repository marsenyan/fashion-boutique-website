import styled, { keyframes } from 'styled-components';

export const opacityAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`;

export const slideAnimation = keyframes`
  0% {
    left: 0;
  }
  50% {
    left: -20px;
  }
  100% {
    left: 0;
  }
`;

export const CardImage = styled.img`
  margin-bottom: 28px;
  border-radius: 20px;
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  align-items: center;
`;

export const CardTitle = styled.div`
  margin-bottom: 7px;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.56;
  letter-spacing: -0.04em;
`;

export const CardMuted = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 2.08;
  letter-spacing: -0.04em;
  color: var(--gray);
`;

export const CardIcon = styled.div`
  position: relative;
`;

export const CardLink = styled.a`
  position: absolute;
  z-index: 1;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
`;

export const CardWrapper = styled.div`
  position: relative;

  &:hover ${CardImage} {
    animation: ${opacityAnimation} 0.2s ease-in-out;
  }

  &:hover ${CardIcon} {
    animation: ${slideAnimation} 0.5s ease-in-out;
  }
`;

