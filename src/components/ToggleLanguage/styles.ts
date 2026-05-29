import styled from 'styled-components';

export const StyledToggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.625rem;
  background-color: ${props => props.theme.colors.backgroundAlt};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  cursor: pointer;
  color: ${props => props.theme.colors.textMuted};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.7rem;
  font-weight: 600;
  transition: ${props => props.theme.transitions.default};
  outline: none;

  &:hover {
    border-color: ${props => props.theme.colors.accent.blue};
    color: ${props => props.theme.colors.textPrimary};
    background-color: ${props => props.theme.colors.card};
    box-shadow: ${props => props.theme.mode === 'dark' ? '0 0 10px rgba(157, 78, 221, 0.1)' : 'none'};
  }
`;

export const ActiveText = styled.span`
  color: ${props => props.theme.colors.textPrimary};
  text-transform: uppercase;
`;

export const MutedText = styled.span`
  color: ${props => props.theme.colors.textMuted};
`;
