import styled, { css } from "styled-components";

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
`;

interface LinkToProps {
  urlImage: string;
}

export const LinkTo = styled.a<LinkToProps>`
  width: 1rem;
  height: 1rem;
  border: none;
  text-decoration: none;
  ${(({urlImage}) => css`
    background-image: url(${urlImage});
  `)};
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 800;
  padding-bottom: 80px;
  padding-left: 20px;
  border-left: 2px solid var(--backgroundContrast);
  border-width: 100%;
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
`;

export const TitleText = styled.p`
  font-size: 1.7rem;
`;

export const SubText = styled.p`
  font-size: 0.9rem;
`;
