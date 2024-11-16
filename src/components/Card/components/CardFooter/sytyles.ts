import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100%;
`;


export const ContainerButtons = styled.div`
 padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
`

export const Button = styled.div`
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;


  border: 1px solid var(--backgroundContrast);
  color: var(--backgroundContrast);

  cursor: pointer;

  &:hover {
    background-color: var(--backgroundContrast);
    color: var(--background);
  }
`

export const ContainerTechnologies = styled.div`
  background-color: var(--cardFooterBackground);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.625rem;
  padding: 1rem;
  border-top: 1px solid var(--cardBorderColor);
`

export const Technologies = styled.p`
  background-color: var(--backgroundContrast);
  color: var(--background);
  font-size: 0.8rem;
  padding: 0.313rem 0.625rem;
  border-radius: 0.5rem;
`