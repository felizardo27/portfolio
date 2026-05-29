import styled from 'styled-components';
import { motion } from 'motion/react';

export const ItemContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 2.5rem;
  margin-bottom: 3.5rem;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }
`;

export const TimeColumn = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: right;
  position: relative;
  padding-right: 1.5rem;
  box-sizing: border-box;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const NodeIndicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.accent.blue};
  border: 2px solid ${props => props.theme.colors.background};
  position: absolute;
  right: -5px;
  top: 6px;
  z-index: 2;
  box-shadow: ${props => props.theme.shadows.glowBlue};
`;

export const DesktopTime = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.75rem;
  color: ${props => props.theme.colors.textSecondary};
  font-weight: 500;
  white-space: nowrap;
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const ItemContentMobileFix = styled.div`
  background-color: ${props => props.theme.colors.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 1.5rem;
  transition: ${props => props.theme.transitions.default};
  box-sizing: border-box;

  &:hover {
    border-color: ${props => props.theme.colors.accent.blue};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glowBlue};
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

export const Role = styled.h3`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: 700;
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const TimeSub = styled.span`
  display: none;
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.7rem;
  color: ${props => props.theme.colors.textMuted};
  font-weight: 500;
  margin-left: 0.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: inline;
  }
`;

export const CompanyName = styled.h4`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 600;
  color: ${props => props.theme.colors.accent.blue};
  margin: 0;
`;

export const BulletList = styled.ul`
  margin: 0 0 1.25rem 0;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-sizing: border-box;
`;

export const BulletItem = styled.li`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.5;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  box-sizing: border-box;
`;

export const TechItem = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.7rem;
  font-weight: 500;
  color: ${props => props.theme.colors.textSecondary};
  background-color: ${props => props.theme.colors.backgroundAlt};
  border: 1px solid ${props => props.theme.colors.border};
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
`;
