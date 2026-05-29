import styled from 'styled-components';

export const AboutWrapper = styled.section`
  padding: 6rem 0;
  width: 100%;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.background};
`;

export const TwoColGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: start;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Paragraph = styled.p`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.7;
  margin: 0 0 1.25rem 0;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const CardsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

export const MiniCard = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 1.25rem;
  background-color: ${props => props.theme.colors.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  box-sizing: border-box;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    border-color: ${props => props.theme.colors.accent.blue};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glowBlue};
  }
`;

export const MiniCardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.backgroundAlt};
  color: ${props => props.theme.colors.accent.blue};
  border: 1px solid ${props => props.theme.colors.border};
  flex-shrink: 0;
`;

export const MiniCardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const MiniCardTitle = styled.h4`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: 700;
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
`;

export const MiniCardDesc = styled.p`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.5;
  margin: 0;
`;
