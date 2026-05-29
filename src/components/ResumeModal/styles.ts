import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(8, 9, 12, 0.85);
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  animation: ${fadeIn} 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  box-sizing: border-box;
`;

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 900px;
  height: 90vh;
  background-color: ${props => props.theme.colors.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.lg};
  animation: ${slideUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  position: relative;
  box-sizing: border-box;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 95vh;
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.backgroundAlt};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${props => props.theme.colors.textPrimary};
  
  span {
    font-family: ${props => props.theme.fonts.sans};
    font-size: ${props => props.theme.fontSizes.sm};
    font-weight: 700;
  }
  
  svg {
    color: ${props => props.theme.colors.accent.blue};
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.textSecondary};
  cursor: pointer;
  transition: ${props => props.theme.transitions.default};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.textPrimary};
    border-color: ${props => props.theme.colors.accent.blue};
    background-color: ${props => props.theme.colors.cardHover};
    transform: translateY(-1px);
  }
`;

export const ModalBody = styled.div`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textSecondary};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  z-index: 10;
`;

export const IframeViewer = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #FFFFFF;
`;

export const FallbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2.5rem;
  max-width: 500px;
  gap: 1.25rem;
  box-sizing: border-box;
`;

export const FallbackTitle = styled.h3`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: 700;
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
`;

export const FallbackDesc = styled.p`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
`;

export const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 600;
  cursor: pointer;
  transition: ${props => props.theme.transitions.default};
  text-decoration: none;

  &.primary {
    background-color: ${props => props.theme.colors.accent.blue};
    color: #FFFFFF;
    border: 1px solid ${props => props.theme.colors.accent.blue};

    &:hover {
      background-color: ${props => props.theme.colors.accent.violet};
      border-color: ${props => props.theme.colors.accent.violet};
      transform: translateY(-1px);
    }
  }

  &.secondary {
    background-color: ${props => props.theme.colors.backgroundAlt};
    color: ${props => props.theme.colors.textSecondary};
    border: 1px solid ${props => props.theme.colors.border};

    &:hover {
      background-color: ${props => props.theme.colors.border};
      color: ${props => props.theme.colors.textPrimary};
      transform: translateY(-1px);
    }
  }
`;
