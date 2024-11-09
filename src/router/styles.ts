import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 5.5rem 1fr; /* navbar fixa em cima e main ocupa o restante */
  grid-template-areas:
    "nav"
    "main";

  height: 100vh; /* Mantém o layout ocupando toda a altura da tela */
  background-color: var(--background);

  /* ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--brand400);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--white);
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--white);
  } */
`;
