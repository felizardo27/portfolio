import styled from "styled-components";

export const Container = styled.div`
  grid-area: main;
  padding: 0 30px;
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

export const DescriptionContainer = styled.div`
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 200px;
  gap: 80px;
  @media screen and (max-width: 1260px) {
    flex-direction: column;
    padding: 0 10px;
    gap: 30px;
    margin-bottom: 80px;
  }
`;

export const Description = styled.p`
  text-align: start;
  font-weight: 500;
  line-height: 2;
  @media screen and (max-width: 1260px) {
    line-height: normal;
    font-size: 14px;
    padding: 0 40px;
  }
`;

export const ImageProfile = styled.img`
  width: 500px;
  border-radius: 8px;

  @media screen and (max-width: 1260px) {
    width: 300px;
  }
`;
