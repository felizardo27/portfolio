import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  grid-area: nav;
  background-color: var(--backgroundContrast);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 100px;
`;

export const IconLogo = styled.img`
  height: 50px;
  width: 50px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Navigation = styled(Link)`
  text-decoration: none;
`;

interface MenuItemProps {
  isActive?: boolean;
}

export const MenuItem = styled.p<MenuItemProps>`
  color: var(--background);
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--background);
    transition: width 0.3s ease;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &::after {
        width: 100%;
      }
    `}

  ${({ isActive }) =>
    !isActive &&
    css`
      &:hover::after {
        width: 50%;
      }
    `}
`;
