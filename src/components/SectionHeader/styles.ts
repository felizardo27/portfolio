import styled from "styled-components";

export const HeaderWrapper = styled.div`
  margin-bottom: 3.5rem;
  text-align: left;
`;

export const PrefixLabel = styled.div`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.accent.blue};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "//";
    color: ${(props) => props.theme.colors.textMuted};
  }
`;

export const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.sans};
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  font-weight: 800;
  color: ${(props) => props.theme.colors.textPrimary};
  letter-spacing: -0.02em;
  margin: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: ${(props) => props.theme.fontSizes.xxl};
  }
`;

export const Description = styled.p`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.textSecondary};
  max-width: 600px;
  margin-top: 0.75rem;
  margin-bottom: 0;
  line-height: 1.6;
`;
