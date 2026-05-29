import styled from 'styled-components';

export const StyledExperienceSection = styled.section`
  padding: 6rem 0;
  width: 100%;
  box-sizing: border-box;
`;

export const TimelineWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 3.5rem;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    left: 180px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: linear-gradient(180deg, ${props => props.theme.colors.border} 0%, ${props => props.theme.colors.accent.blue} 50%, ${props => props.theme.colors.border} 100%);
    opacity: 0.6;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
      display: none;
    }
  }
`;
