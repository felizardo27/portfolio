import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0;
  width: 400px;

  background-color: var(--cardBackground);
  border: 1px solid var(--cardBorderColor);
  border-radius: 0.5rem;
  box-shadow: 1px 0px 4px var(--cardBorderColor);

  @media screen and (max-width: 830px){
    width: 350px;
  }

  @media screen and (max-width: 390px){
    width: 250px;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding-bottom: 1rem;
`;