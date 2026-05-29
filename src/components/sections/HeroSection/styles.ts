import styled from 'styled-components';

export const StyledHeroSection = styled.section`
  padding: 8rem 0 6rem 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  min-height: 85vh;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    height: 100vh;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 7rem 0 4rem 0;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BadgeWrapper = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
`;

export const Headline = styled.h1`
  font-family: ${props => props.theme.fonts.sans};
  font-size: 3.25rem;
  font-weight: 800;
  line-height: 1.15;
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
  letter-spacing: -0.03em;

  span {
    background: linear-gradient(90deg, ${props => props.theme.colors.accent.blue}, ${props => props.theme.colors.accent.cyan});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    font-size: 2.75rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;

export const Paragraph = styled.p`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin: 1.5rem 0 2.25rem 0;
  max-width: 580px;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes.sm};
    margin: 1.25rem 0 1.75rem 0;
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  width: 100%;
`;

export const DashboardCard = styled.div`
  background-color: ${props => props.theme.colors.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  width: 100%;
  box-sizing: border-box;
  box-shadow: ${props => props.theme.shadows.md};
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: ${props => props.theme.colors.accent.blue};
    box-shadow: ${props => props.theme.shadows.glowBlue};
  }
`;

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  padding-bottom: 0.75rem;
  margin-bottom: 0.5rem;
  width: 100%;
  box-sizing: border-box;
`;

export const TerminalIndicator = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.65rem;
  color: ${props => props.theme.colors.textMuted};
  font-weight: 700;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
`;

export const TechLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.725rem;
  border-bottom: 1px dashed ${props => props.theme.colors.border};
  padding-bottom: 0.5rem;
  width: 100%;
  box-sizing: border-box;

  &:last-of-type {
    border-bottom: none;
  }
`;

export const TechLabel = styled.span`
  color: ${props => props.theme.colors.textMuted};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.03em;
`;

export const TechValue = styled.span<{ $pulseColor?: string }>`
  color: ${props => props.$pulseColor || props.theme.colors.textPrimary};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  text-align: right;
`;

export const Dot = styled.span<{ color?: string }>`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${props => props.color || '#10B981'};
`;
