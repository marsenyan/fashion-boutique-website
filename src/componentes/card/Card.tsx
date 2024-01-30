import React from 'react';
import {
  CardWrapper,
  CardLink,
  CardImage,
  CardBody,
  CardTitle,
  CardMuted,
  CardIcon
} from './styles.ts';
import arrowImg from '../../assets/icons/arrow.svg';

interface CardProps {
  title: string;
  img: string;
}

export const Card: React.FC<CardProps> = ({ title, img }) => {
  return (
    <CardWrapper>
      <CardLink href="#!"></CardLink>
      <CardImage src={img} alt="Category ..." />
      <CardBody>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardMuted>Explore Now!</CardMuted>
        </div>
        <CardIcon>
          <img src={arrowImg} alt="Open" />
        </CardIcon>
      </CardBody>
    </CardWrapper>
  );
};

