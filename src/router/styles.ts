import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 6.5rem 1fr;
  grid-template-areas:
    "nav"
    "main";

  height: 100vh; 
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
