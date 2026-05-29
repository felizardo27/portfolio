import styled from 'styled-components';

export const StyledCard = styled.div<{ $isFeatured?: boolean }>`
  background-color: ${props => props.theme.colors.card};
  border: 1px solid ${props => props.$isFeatured ? props.theme.colors.accent.blue : props.theme.colors.border};
  border-radius: 14px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  height: 100%;
  box-sizing: border-box;
  transition: ${props => props.theme.transitions.default};
  box-shadow: ${props => props.$isFeatured ? props.theme.shadows.glowBlue : props.theme.shadows.sm};

  &:hover {
    border-color: ${props => props.theme.colors.accent.blue};
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.glowBlue};
  }
`;

export const GlowAccent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, ${props => props.theme.colors.accent.blue}, ${props => props.theme.colors.accent.cyan});
`;

export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.backgroundAlt};
  margin-bottom: 1.25rem;
  display: block;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${props => props.theme.transitions.default};

  ${StyledCard}:hover & {
    transform: scale(1.04);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const CategoryName = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.65rem;
  color: ${props => props.theme.colors.accent.blue};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
`;

export const Title = styled.h3`
  font-family: ${props => props.theme.fonts.sans};
  font-size: 1.45rem;
  font-weight: 700;
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
  letter-spacing: -0.01em;
`;

export const Description = styled.p`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-top: 1.25rem;
`;

export const TechTag = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.65rem;
  font-weight: 500;
  color: ${props => props.theme.colors.textSecondary};
  background-color: ${props => props.theme.colors.backgroundAlt};
  border: 1px solid ${props => props.theme.colors.border};
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.border};
  padding-top: 1.25rem;
  margin-top: 1.5rem;
  box-sizing: border-box;
`;

export const TelemetryMetric = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const MetricLabel = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.6rem;
  color: ${props => props.theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const MetricValue = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.725rem;
  font-weight: 600;
  color: ${props => props.theme.colors.textPrimary};
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const AnchorLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${props => props.theme.fonts.sans};
  font-size: 0.75rem;
  font-weight: 600;
  color: ${props => props.theme.colors.textSecondary};
  text-decoration: none;
  transition: ${props => props.theme.transitions.default};
  border: 1px solid ${props => props.theme.colors.border};
  padding: 0.3rem 0.6rem;
  border-radius: 6px;

  &:hover {
    color: ${props => props.theme.colors.textPrimary};
    border-color: ${props => props.theme.colors.accent.blue};
    background-color: ${props => props.theme.colors.backgroundAlt};
  }

  svg {
    color: ${props => props.theme.colors.accent.blue};
  }
`;
