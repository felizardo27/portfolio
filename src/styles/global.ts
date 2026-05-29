import { createGlobalStyle } from 'styled-components';
import { AppTheme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textPrimary};
    font-family: ${props => props.theme.fonts.sans};
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: ${props => props.theme.transitions.default};
  }

  button, input, textarea, select {
    font-family: inherit;
    background: none;
    border: none;
    color: inherit;
    outline: none;
    cursor: pointer;
  }

  /* Command Center Grid Overlay */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: 
      linear-gradient(to right, ${props => props.theme.colors.gridColor} 1px, transparent 1px),
      linear-gradient(to bottom, ${props => props.theme.colors.gridColor} 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
    z-index: -1;
  }

  /* Soft radial glow on background */
  body::after {
    content: '';
    position: fixed;
    top: -20%;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 60vh;
    /* background: radial-gradient(
      circle, 
      ${props => props.theme.mode === 'dark' ? 'rgba(0, 102, 255, 0.05)' : 'rgba(0, 102, 255, 0.02)'} 0%, 
      transparent 70%
    ); */
    pointer-events: none;
    z-index: -1;
  }

  /* Selection style */
  ::selection {
    background-color: ${props => props.theme.colors.accent.blue};
    color: #FFFFFF;
  }

  /* Scrollbar Customization */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.border};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.borderHover};
  }
`;
