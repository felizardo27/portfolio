import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  grid-area: nav;
  background-color: var(--backgroundContrast);
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 100px;
  z-index: 1000;

  @media screen and (max-width: 830px) {
    padding: 10px 50px;
  }
`;

export const IconLogo = styled.img`
  height: 50px;
  width: 50px;
  @media screen and (max-width: 830px) {
    height: 30px;
    width: 30px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 830px) {
    display: none;
  }
`;

export const MenuMobile = styled.div`
  position: relative;
  @media screen and (min-width: 830px) {
    display: none;
  }
`;

interface ContainerItemsProps {
  menuOpen: boolean;
}

export const ContainerItems = styled.div<ContainerItemsProps>`
  width: 100%;
  position: absolute;
  background-color: var(--backgroundContrast);
  top: 85px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
  overflow: hidden;
  transition:
    max-height 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
  max-height: ${({ menuOpen }) => (menuOpen ? "500px" : "0")};
  opacity: ${({ menuOpen }) => (menuOpen ? 1 : 0)};
  pointer-events: ${({ menuOpen }) => (menuOpen ? "auto" : "none")};

  @media screen and (min-width: 830px) {
    display: none;
  }
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
  font-weight: 500;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 830px) {
    &:hover {
      opacity: 0.6;
    }
  }

  @media screen and (min-width: 830px) {
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
  }
`;
