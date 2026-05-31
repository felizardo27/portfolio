import styled, { keyframes } from "styled-components";
import { motion } from "motion/react";

const pulseGlow = keyframes`
  0% {
    box-shadow: 0 0 10px ${(props) => props.theme.colors.accent.cyan}40, 0 0 20px ${(props) => props.theme.colors.accent.blue}20;
  }
  50% {
    box-shadow: 0 0 20px ${(props) => props.theme.colors.accent.cyan}80, 0 0 35px ${(props) => props.theme.colors.accent.blue}50;
  }
  100% {
    box-shadow: 0 0 10px ${(props) => props.theme.colors.accent.cyan}40, 0 0 20px ${(props) => props.theme.colors.accent.blue}20;
  }
`;

export const LinksLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  padding: 2.5rem 1.25rem 16rem 1.25rem;
`;

export const HeaderControls = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
  max-width: 580px;
  margin-bottom: 2.5rem;
  z-index: 10;
`;

export const ProfileCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 580px;
  background: ${(props) => props.theme.colors.card};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 20px;
  padding: 2.5rem 2rem;
  box-shadow: ${(props) => props.theme.shadows.md};
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.borderHover};
    box-shadow:
      ${(props) => props.theme.shadows.lg},
      0 0 25px ${(props) => props.theme.colors.accent.blueGlow};
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  margin-bottom: 1.5rem;

  &::after {
    content: "";
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.accent.blue},
      ${(props) => props.theme.colors.accent.cyan}
    );
    z-index: -1;
    animation: ${pulseGlow} 4s infinite ease-in-out;
  }
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${(props) => props.theme.colors.card};
  background-color: ${(props) => props.theme.colors.backgroundAlt};
`;

export const ProfileName = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  font-weight: 800;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 0.25rem;
  letter-spacing: -0.02em;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.textPrimary} 30%,
    ${(props) => props.theme.colors.textSecondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ProfileUsername = styled.span`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.accent.cyan};
  margin-bottom: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
`;

export const ProfileBio = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.textSecondary};
  max-width: 440px;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2.5rem;
  z-index: 5;
`;

export const LinkButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.1rem 1.5rem;
  background-color: ${(props) => props.theme.colors.backgroundAlt};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 14px;
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: 600;
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes.md};
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${(props) => props.theme.shadows.sm};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.accent.blue},
      ${(props) => props.theme.colors.accent.cyan}
    );
    opacity: 0.8;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: ${(props) => props.theme.colors.accent.cyan}60;
    background-color: ${(props) => props.theme.colors.cardHover};
    box-shadow: 0 4px 15px ${(props) => props.theme.colors.accent.blue}15;

    .link-icon-arrow {
      transform: translateX(4px);
      color: ${(props) => props.theme.colors.accent.cyan};
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LinkIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.card};
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.accent.blue};
  transition: all 0.2s ease;

  ${LinkButton}:hover & {
    color: ${(props) => props.theme.colors.accent.cyan};
    border-color: ${(props) => props.theme.colors.accent.cyan}40;
    background-color: ${(props) => props.theme.colors.background};
  }
`;

export const LinkArrow = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.textMuted};
  transition: all 0.25s ease;
`;

export const SpotifyResponsiveEmbed = styled.div`
  width: 100%;

  iframe {
    border: none;
    display: block;
    width: 100%;
    background-color: transparent;
  }
`;

export const Footer = styled.div`
  margin-top: 4rem;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 0.65rem;
  color: ${(props) => props.theme.colors.textMuted};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  z-index: 10;

  span {
    color: ${(props) => props.theme.colors.accent.blue};
  }
`;
