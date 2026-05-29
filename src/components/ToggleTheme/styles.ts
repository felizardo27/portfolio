import styled from 'styled-components';

export const StyledToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem;
  width: 28px;
  height: 28px;
  background-color: ${props => props.theme.colors.backgroundAlt};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  cursor: pointer;
  color: ${props => props.theme.colors.textSecondary};
  transition: ${props => props.theme.transitions.default};
  outline: none;

  &:hover {
    border-color: ${props => props.theme.colors.accent.blue};
    color: ${props => props.theme.colors.textPrimary};
    background-color: ${props => props.theme.colors.card};
    box-shadow: ${props => props.theme.mode === 'dark' ? '0 0 10px rgba(157, 78, 221, 0.1)' : 'none'};
  }

  svg {
    width: 13px;
    height: 13px;
  }
`;
