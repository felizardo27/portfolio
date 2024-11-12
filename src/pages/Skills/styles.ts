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

export const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 1000px) {
    gap: 10px;
  }
  
`;

export const SkillTitle = styled.p`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const SkillIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  p {
    font-weight: 400;
    font-size: 1rem;
  }

  @media screen and (max-width: 1000px) {
    gap: 5px;
    p {
    font-size: 0.8rem;
    }
  }
`;

export const Icon = styled.img`
  height: 75px;
  width: 75px;

  @media screen and (max-width: 1000px) {
    width: 45px;
    height: 45px;
  }
`;