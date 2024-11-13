import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 18px;
  position: relative;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  padding: 5px;
  background-color: var(--backgroundContrast);
  @media screen and (max-width: 830px) {
    width: 30px;
    height: 30px;
  }
`;

export const ArrowIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;

  &:hover {
    opacity: 0.5;
  }
  @media screen and (max-width: 830px) {
    width: 0.9;
    height: 0.9rem;
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 800;
  padding-bottom: 80px;
  padding-left: 20px;
  border-left: 2px solid var(--backgroundContrast);
  @media screen and (max-width: 830px) {
    gap: 5px;
    padding-bottom: 60px;
  }
`;

export const ContainerDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const DateText = styled.p`
  color: var(--info300);
  font-size: 1rem;
  @media screen and (max-width: 830px) {
    font-size: 0.8rem;
  }
`;

export const TitleText = styled.p`
  font-size: 1.6rem;
  @media screen and (max-width: 830px) {
    font-size: 1.4rem;
  }
`;

export const SubText = styled.p`
  font-size: 0.9rem;
`;
