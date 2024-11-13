import styled from "styled-components";

export const Container = styled.div`
  grid-area: main;
  height: 100%;
  background-color: var(--background);
  color: var(--backgroundContrast);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 30px;
`;


export const Title = styled.h3`
  margin-top: 20px;
  font-size: 3rem;
  font-weight: 700;
`;

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
`;