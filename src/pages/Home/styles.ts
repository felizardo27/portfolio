import styled from "styled-components";

export const Container = styled.div`
  grid-area: main;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--background);
  color: var(--backgroundContrast);
`;

export const NameTitle = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 13px;
  text-align: center;

  @media screen and (max-width: 830px) {
    font-size: 3rem;
  }
`;

export const SkillsWrite = styled.div`
  font-size: 2rem;
  margin-bottom: 68px;

  @media screen and (max-width: 830px) {
    font-size: 2rem;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  gap: 20px;
`;

export const IconContainer = styled.a`
   background-color: var(--backgroundContrast);
   padding: 14px;
   border-radius: 50%;
   cursor: pointer;
`

export const Icon = styled.img`
  height: 20px;
  width: 20px;
`;
