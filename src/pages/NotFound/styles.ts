import styled, { keyframes } from 'styled-components';
import { motion } from 'motion/react';

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const NotFoundLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

export const Container404 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 500px;
  background: ${props => props.theme.colors.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 24px;
  padding: 3.5rem 2.5rem;
  box-shadow: ${props => props.theme.shadows.lg};
  backdrop-filter: blur(12px);
  z-index: 10;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.accent.blue}50;
    box-shadow: ${props => props.theme.shadows.lg}, 0 0 30px ${props => props.theme.colors.accent.blueGlow};
  }
`;

export const ErrorCode = styled(motion.h1)`
  font-size: 6.5rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.05em;
  background: linear-gradient(135deg, ${props => props.theme.colors.accent.blue}, ${props => props.theme.colors.accent.cyan});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  font-family: ${props => props.theme.fonts.mono || 'inherit'};
  animation: ${floatAnimation} 4s ease-in-out infinite;
`;

export const ErrorTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: 800;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`;

export const ErrorDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 380px;
`;

export const BackButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.9rem 2rem;
  background-image: linear-gradient(135deg, ${props => props.theme.colors.accent.blue}, ${props => props.theme.colors.accent.cyan});
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.md};
  cursor: pointer;
  box-shadow: 0 4px 15px ${props => props.theme.colors.accent.blue}40;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    box-shadow: 0 6px 20px ${props => props.theme.colors.accent.cyan}60;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Footer = styled.div`
  margin-top: 3rem;
  text-align: center;
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.65rem;
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  z-index: 10;

  span {
    color: ${props => props.theme.colors.accent.blue};
  }
`;
