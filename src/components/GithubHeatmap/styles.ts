import styled, { keyframes } from 'styled-components';

export const HeatmapContainer = styled.div`
  background-color: ${props => props.theme.colors.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 1.25rem;
  width: 100%;
  box-sizing: border-box;
  margin-top: 1rem;
`;

export const HeatmapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 700;
  color: ${props => props.theme.colors.textPrimary};
  gap: 0.5rem;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const pulse = keyframes`
  0% { transform: scale(0.92); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(0.92); opacity: 0.8; }
`;

export const FeedStatus = styled.div<{ $pulseColor?: string }>`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.65rem;
  font-weight: 600;
  color: ${props => props.theme.colors.textPrimary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 0.55rem;
  }

  svg {
    color: ${props => props.$pulseColor || props.theme.colors.accent.blue};
    animation: ${pulse} 1.4s infinite ease-in-out;
    flex-shrink: 0;
  }
`;

const shimmer = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 0.7; }
  100% { opacity: 0.3; }
`;

export const ShimmerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  gap: 3px;
  width: 100%;
  animation: ${shimmer} 1.6s infinite ease-in-out;

  div {
    width: 100%;
    aspect-ratio: 1;
    background-color: ${props => props.theme.mode === 'dark' ? '#161B22' : '#EBEDF0'};
    border-radius: 2px;
  }
`;

export const GridDecoration = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  gap: 3px;
  width: 100%;
`;

export const GridDecBox = styled.div<{ $active?: boolean; $level: number }>`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 2px;
  background-color: ${props => {
    if (!props.$active) {
      return props.theme.mode === 'dark' ? '#161B22' : '#E2E8F0';
    }
    // Shades of theme accent blue
    switch (props.$level) {
      case 1:
        return props.theme.mode === 'dark' ? 'rgba(157, 78, 221, 0.25)' : 'rgba(123, 44, 191, 0.2)';
      case 2:
        return props.theme.mode === 'dark' ? 'rgba(157, 78, 221, 0.5)' : 'rgba(123, 44, 191, 0.47)';
      case 3:
        return props.theme.mode === 'dark' ? 'rgba(157, 78, 221, 0.75)' : 'rgba(123, 44, 191, 0.75)';
      case 4:
      default:
        return props.theme.colors.accent.blue;
    }
  }};
  transition: transform 0.15s ease, background-color 0.15s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.25);
    background-color: ${props => props.theme.colors.accent.cyan};
    box-shadow: 0 0 10px ${props => props.theme.colors.accent.blue};
    z-index: 5;
  }
`;
