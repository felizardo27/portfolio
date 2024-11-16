import styled from "styled-components";

export const ContainerContent = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 600;

  @media screen and (max-width: 390px){
    font-size: 1.8rem;
  }
`;

export const ContainerDescription = styled.ul`
  list-style: circle;
  padding-left: 2rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ItemDescription = styled.li`
  font-size: 1.1rem;
  font-weight: 500;

  @media screen and (max-width: 390px){
    font-size: 1rem;
  }
`;
