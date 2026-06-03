import styled, { keyframes, css } from 'styled-components';
import { motion } from 'motion/react';

// Live audio equalizer bar animation
const bounceAnim = keyframes`
  0%, 100% { transform: scaleY(0.3); }
  50% { transform: scaleY(1); }
`;

export const BadgeContainer = styled.div`
  position: absolute;
  bottom: -4px;
  right: -4px;
  z-index: 15;
`;

export const BadgeTrigger = styled(motion.button)<{ $isPlaying: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.colors.card};
  cursor: pointer;
  outline: none;
  padding: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
  
  background: ${props => props.$isPlaying ? '#1DB954' : props.theme.colors.backgroundAlt};
  color: ${props => props.$isPlaying ? '#ffffff' : props.theme.colors.textSecondary};

  transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.25s ease;

  &:hover {
    transform: scale(1.15);
    border-color: ${props => props.$isPlaying ? '#1DB954' : props.theme.colors.accent.blue};
    box-shadow: 0 0 15px ${props => props.$isPlaying ? 'rgba(29, 185, 84, 0.6)' : 'rgba(0, 102, 255, 0.3)'};
  }
`;

export const PulseCircle = styled.span<{ $isPlaying: boolean }>`
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  border: 1.5px solid ${props => props.$isPlaying ? '#1DB954' : props.theme.colors.accent.blue};
  z-index: -1;
  opacity: 0;

  ${props => props.$isPlaying && css`
    animation: pulse-ring 2.0s cubic-bezier(0.24, 0, 0.38, 1) infinite;
  `}

  @keyframes pulse-ring {
    0% { transform: scale(0.95); opacity: 0.8; }
    50% { opacity: 0.4; }
    100% { transform: scale(1.4); opacity: 0; }
  }
`;

export const TooltipWrapper = styled(motion.div)`
  position: absolute;
  bottom: 44px;
  right: 50%;
  transform: translateX(50%) !important;
  width: 250px;
  background: ${props => props.theme.colors.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 0.85rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);
  z-index: 50;
  pointer-events: auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 10px;
    height: 10px;
    background: ${props => props.theme.colors.card};
    border-right: 1px solid ${props => props.theme.colors.border};
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }
`;

export const TooltipHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.border}40;
  padding-bottom: 0.4rem;
  margin-bottom: 0.2rem;
`;

export const TooltipStatusText = styled.span<{ $isPlaying: boolean }>`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  color: ${props => props.$isPlaying ? '#1DB954' : props.theme.colors.textMuted};
`;

export const EqualizerContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 10px;
  width: 14px;
`;

export const EqualizerBar = styled.div`
  width: 2px;
  height: 100%;
  border-radius: 1px;
  background-color: #1DB954;
  transform-origin: bottom;
  animation: ${bounceAnim} 1s ease-in-out infinite;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export const TrackContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const AlbumArtwork = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 6px;
  object-fit: cover;
  border: 1px solid ${props => props.theme.colors.border}40;
  background-color: ${props => props.theme.colors.backgroundAlt};
`;

export const TrackDetails = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1;
`;

export const TrackTitle = styled.a`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textPrimary};
  font-weight: 700;
  line-height: 1.35;
  text-decoration: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:hover {
    color: #1DB954;
    text-decoration: underline;
  }
`;

export const TrackArtist = styled.span`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.textSecondary};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const OfflineTrackContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.15rem 0;
`;

export const OfflineTextSub = styled.span`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.4;
`;
