import styled from "styled-components";

export const HeaderContent = styled.header`
  padding: 46px 0 56px;
`;

export const HeaderRow = styled.div`
  display: flex;
  column-gap: 30px;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 13px;
`;

export const LogoImage = styled.img``;

export const LogoText = styled.span`
  font-weight: 900;
  font-size: 40px;
  line-height: 1.5;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

export const Nav = styled.nav`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 0.01em;
`;

export const NavList = styled.ul`
  display: flex;
  column-gap: 65px;
  align-items: center;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  color: var(--text-color);
`;

export const NavButton = styled.a`
  padding: 13px 22px 17px;
  background-color: #000;
  border-radius: 7px;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: -0.03em;
  color: #fff;
`;
