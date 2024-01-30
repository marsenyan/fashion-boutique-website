import React from 'react';
import {
  HeaderContent,
  HeaderRow,
  Logo,
  LogoImage,
  LogoText,
  Nav,
  NavList,
  NavItem,
  NavLink,
  NavButton
} from './styles.ts';

import logoImg from '../../assets/icons/logo.svg';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContent>
      <div className="container">
        <HeaderRow>
          <Logo>
            <LogoImage src={logoImg} alt="Logo" />
            <LogoText>Fashion</LogoText>
          </Logo>
          <Nav>
            <NavList>
              <NavItem>
                <NavLink href="catalogue">CATALOGUE</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="fashion">FASHION</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="favourite">FAVOURITE</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="lifestyle">LIFESTYLE</NavLink>
              </NavItem>
              <NavItem>
                <NavButton className="header__nav-btn">SIGN UP</NavButton>
              </NavItem>
            </NavList>
          </Nav>
        </HeaderRow>
      </div>
    </HeaderContent>
  );
};

