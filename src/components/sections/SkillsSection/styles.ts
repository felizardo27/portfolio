import styled from 'styled-components';

export const SkillsWrapper = styled.section`
  padding: 6rem 0;
  width: 100%;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.background};
`;

export const CategoryGroup = styled.div`
  margin-bottom: 3.5rem;
  width: 100%;
  box-sizing: border-box;
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  padding-bottom: 0.75rem;
  margin-bottom: 1.5rem;
  width: 100%;
  box-sizing: border-box;
`;

export const CategoryIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: ${props => props.theme.colors.backgroundAlt};
  color: ${props => props.theme.colors.accent.blue};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 6px;
  flex-shrink: 0;
`;

export const CategoryTitle = styled.h3`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: 700;
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
`;

export const TelemetryLine = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.65rem;
  color: ${props => props.theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-left: auto;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(115px, 1fr));
  gap: 0.75rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TechCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.5rem 0.75rem;
  background-color: ${props => props.theme.colors.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  height: 100%;
  box-sizing: border-box;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    border-color: ${props => props.theme.colors.accent.blue};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glowBlue};
  }
`;

export const TechIconImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  flex-shrink: 0;
`;

export const TechName = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.725rem;
  font-weight: 600;
  color: ${props => props.theme.colors.textSecondary};

  ${TechCard}:hover & {
    color: ${props => props.theme.colors.textPrimary};
  }
`;
