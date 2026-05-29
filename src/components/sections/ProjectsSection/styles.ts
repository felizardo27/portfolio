import styled from 'styled-components';

export const StyledProjectsSection = styled.section`
  padding: 6rem 0;
  width: 100%;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.background};
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const SubSectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 700;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.9;
`;

export const OthersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const GithubLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.5rem;
  width: 100%;
`;

export const CodePulse = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.725rem;
  color: ${props => props.theme.colors.textMuted};
  text-align: center;
  margin-top: 1.5rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 0.65rem;
  }
`;
