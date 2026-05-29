import styled, { css } from 'styled-components';

export const NavContainer = styled.nav<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: ${props => 
    props.$isScrolled 
      ? (props.theme.mode === 'dark' ? 'rgba(8, 9, 12, 0.85)' : 'rgba(255, 255, 255, 0.85)') 
      : 'transparent'
  };
  backdrop-filter: ${props => props.$isScrolled ? 'blur(12px)' : 'none'};
  border-bottom: 1px solid ${props => props.$isScrolled ? props.theme.colors.border : 'transparent'};
  z-index: 1000;
  transition: ${props => props.theme.transitions.default};
`;

export const InnerNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const LogoUrl = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.sans};
  font-weight: 800;
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.textPrimary};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  letter-spacing: -0.01em;
  padding: 0;

  span {
    color: ${props => props.theme.colors.accent.blue};
    font-family: ${props => props.theme.fonts.mono};
  }
`;

export const DesktopLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const NavLink = styled.button<{ $isActive?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 600;
  color: ${props => props.$isActive ? props.theme.colors.accent.blue : props.theme.colors.textSecondary};
  transition: ${props => props.theme.transitions.default};
  position: relative;
  padding: 0.25rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.colors.accent.blue};
    transform: scaleX(${props => props.$isActive ? 1 : 0});
    transform-origin: left;
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover {
    color: ${props => props.theme.colors.textPrimary};
    
    &::after {
      transform: scaleX(1);
    }
  }
`;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.textPrimary};
  padding: 0.25rem;
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: inline-flex;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const MobileDrawer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 70px;
  right: 0;
  width: 280px;
  height: calc(100vh - 70px);
  background-color: ${props => props.theme.colors.card};
  border-left: 1px solid ${props => props.theme.colors.border};
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1.25rem;
  transform: translateX(${props => props.$isOpen ? '0' : '100%'});
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: ${props => props.$isOpen ? props.theme.shadows.lg : 'none'};
  box-sizing: border-box;

  @media (min-width: 641px) {
    width: 320px;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const DrawerNavLink = styled.button<{ $isActive?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
  color: ${props => props.$isActive ? props.theme.colors.accent.blue : props.theme.colors.textSecondary};
  padding: 0.5rem 0;
  transition: ${props => props.theme.transitions.default};
  width: 100%;

  &:hover {
    color: ${props => props.theme.colors.textPrimary};
    padding-left: 0.5rem;
  }
`;

export const TelemetryBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  padding-bottom: 1rem;
  margin-bottom: 0.5rem;
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.65rem;
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.05em;
`;

export const DrawerFooter = styled.div`
  margin-top: auto;
  border-top: 1px solid ${props => props.theme.colors.border};
  padding-top: 1rem;
`;
