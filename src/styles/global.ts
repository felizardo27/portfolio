import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --black: ${(props) => props.theme.black};
    --white: ${(props) => props.theme.white};
    --info300: ${(props) => props.theme.info300};
    --navBar100: ${(props) => props.theme.navBar100};
    --navBar200: ${(props) => props.theme.navBar200};

    --background: ${(props) => props.theme.background};
    --backgroundContrast: ${(props) => props.theme.backgroundContrast};

    --chronoThemeCardBgColor: ${(props) => props.theme.chronoTheme.cardBgColor};
    --chronoThemeCardForeColor: ${(props) => props.theme.chronoTheme.cardForeColor};
    --chronoThemeTitleColor: ${(props) => props.theme.chronoTheme.titleColor};

    --timelineLineColor: ${(props) => props.theme.timelineLineColor};
    --cardBackground: ${(props) => props.theme.cardBackground};
    --cardFooterBackground: ${(props) => props.theme.cardFooterBackground};
    --cardBorderColor: ${(props) => props.theme.cardBorderColor};

    --bsPrimaryVariant: ${(props) => props.theme.bsPrimaryVariant};
    --bsSecondaryVariant: ${(props) => props.theme.bsSecondaryVariant};

    --socialIconBgColor: ${(props) => props.theme.socialIconBgColor};
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: "Roboto", sans-serif;;
  }

  body {
    overscroll-behavior: none;
    line-height: 1;
    background-color: ${({theme}) => theme.background};
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px){
            font-size: 86.5%; // 14px
        }
    }
`;
