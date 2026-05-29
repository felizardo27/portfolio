import styled from 'styled-components';

export const StyledContactSection = styled.section`
  padding: 6rem 0;
  width: 100%;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.background};
`;

export const ContactBox = styled.div`
  background-color: ${props => props.theme.colors.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 16px;
  padding: 3.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2.25rem;
  width: 100%;
  box-sizing: border-box;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    border-color: ${props => props.theme.colors.accent.blue};
    box-shadow: ${props => props.theme.shadows.glowBlue};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 2.5rem 1.5rem;
    gap: 1.75rem;
  }
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: 800;
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
  letter-spacing: -0.02em;

  span {
    background: linear-gradient(90deg, ${props => props.theme.colors.accent.blue}, ${props => props.theme.colors.accent.cyan});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

export const CopyParagraph = styled.p`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

export const EmailBox = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.75rem 1.25rem;
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 600;
  color: ${props => props.theme.colors.textPrimary};
  background-color: ${props => props.theme.colors.backgroundAlt};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  cursor: pointer;
  transition: ${props => props.theme.transitions.default};
  outline: none;

  &:hover {
    border-color: ${props => props.theme.colors.accent.blue};
    background-color: ${props => props.theme.colors.cardHover};
    transform: translateY(-1px);
    box-shadow: ${props => props.theme.shadows.glowBlue};
  }

  svg {
    color: ${props => props.theme.colors.accent.blue};
  }
`;

export const CopyFeedback = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.6875rem;
  color: #10B981;
  font-weight: 600;
  letter-spacing: 0.05em;
`;

export const ButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 750px;
  box-sizing: border-box;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
`;
