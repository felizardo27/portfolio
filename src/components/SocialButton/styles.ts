import styled from 'styled-components';

export const ButtonAnchor = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background-color: ${props => props.theme.colors.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  color: ${props => props.theme.colors.textPrimary};
  text-decoration: none;
  font-family: ${props => props.theme.fonts.sans};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.sm};
  transition: ${props => props.theme.transitions.default};
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: ${props => props.theme.colors.cardHover};
    border-color: ${props => props.theme.colors.accent.blue};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glowBlue};
  }
`;

export const ContentSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.accent.blue};
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textMuted};
  transition: transform 0.2s ease;
  
  ${ButtonAnchor}:hover & {
    transform: translateX(4px);
    color: ${props => props.theme.colors.accent.blue};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;
