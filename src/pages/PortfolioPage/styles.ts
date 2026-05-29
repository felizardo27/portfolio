import styled from 'styled-components';

export const MainLayout = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

export const FooterContainer = styled.footer`
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: 4rem 0 3rem 0;
  background-color: ${props => props.theme.colors.background};
  margin-top: 5rem;
  position: relative;
`;

export const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FooterBranding = styled.div`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textPrimary};
  font-weight: 700;
  
  span {
    color: ${props => props.theme.colors.accent.blue};
    font-family: ${props => props.theme.fonts.mono};
  }
`;

export const FooterText = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.6875rem;
  color: ${props => props.theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;
export const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  color: #FFFFFF;
`;

export const LoaderBars = styled.div`
  display: flex;
  gap: 4px;
  height: 16px;
`;

export const LoaderBar = styled.span`
  width: 4px;
  height: 100%;
  background-color: #0066FF;
  animation: loadBounce 0.8s infinite ease-in-out alternate;
  
  &:nth-child(2) { animation-delay: 0.15s; background-color: #00F0FF; }
  &:nth-child(3) { animation-delay: 0.3s; background-color: #9D4EDD; }
  &:nth-child(4) { animation-delay: 0.45s; background-color: #10B981; }

  @keyframes loadBounce {
    from { transform: scaleY(0.2); }
    to { transform: scaleY(1); }
  }
`;
export const TechLoaderLabel = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.7rem;
  color: #94A3B8;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const SectionWrapper = styled.div`
  opacity: 0;
  animation: pageFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 0.25s;

  @keyframes pageFadeIn {
    to {
      opacity: 1;
    }
  }
`;
