import styled, { keyframes, css } from 'styled-components';

export const pulseAnim = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
`;

export const pulseStyles = css<{ $color: string; $glow: string }>`
  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${props => props.$color};
    margin-right: 6px;
    animation: ${pulseAnim} 1.8s infinite ease-in-out;
  }
`;

export const StyledBadge = styled.span<{
  $variant: string;
  $pulse?: boolean;
  $color: string;
  $bg: string;
  $border: string;
  $glow: string;
}>`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: ${props => props.$bg};
  color: ${props => props.$color};
  border: 1px solid ${props => props.$border};
  white-space: nowrap;
  
  ${props => props.$pulse && pulseStyles}
`;
