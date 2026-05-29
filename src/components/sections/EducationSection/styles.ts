import styled from 'styled-components';

export const StyledEducationSection = styled.section`
  padding: 6rem 0;
  width: 100%;
  box-sizing: border-box;
`;

export const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const EduCard = styled.div`
  background-color: ${props => props.theme.colors.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 1.75rem;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    border-color: ${props => props.theme.colors.accent.blue};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glowBlue};
  }
`;

export const EduHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Degree = styled.h3`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: 700;
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
`;

export const Institution = styled.span`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.accent.blue};
  font-weight: 600;
`;

export const Period = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.7rem;
  color: ${props => props.theme.colors.textMuted};
  font-weight: 600;
  background-color: ${props => props.theme.colors.backgroundAlt};
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.colors.border};
  white-space: nowrap;
`;

export const Description = styled.p`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
`;

export const CredentialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-family: ${props => props.theme.fonts.sans};
  font-size: 0.75rem;
  font-weight: 600;
  color: ${props => props.theme.colors.textSecondary};
  background: none;
  cursor: pointer;
  outline: none;
  border: 1px solid ${props => props.theme.colors.border};
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  width: fit-content;
  text-decoration: none;
  box-sizing: border-box;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.textPrimary};
    border-color: ${props => props.theme.colors.accent.blue};
    background-color: ${props => props.theme.colors.backgroundAlt};
  }

  svg {
    color: ${props => props.theme.colors.accent.blue};
  }
`;
