import { CardProps } from "../components/Card";
import { useLanguage } from "../context/useLanguage";
import { DataProps } from "./dataTypes";

export function dataProjects() {
  const { language } = useLanguage();

  const data: DataProps<CardProps> = {
    title: language === "ptBr" ? "Projetos" : "Projects",
    data: [
      {
        titleCard: "NubbleApp",
        description:
          language === "ptBr"
            ? [
                "O Nubble App adota uma arquitetura em camadas com princípios de Clean Architecture, SOLID, design patterns e MVVM (Model-View-ViewModel)",
                "Esta estrutura, validada em projetos com milhares de usuários, visa criar apps fáceis de entender e manter, além de escaláveis em termos de base de código e equipe.",
              ]
            : [
                "The Nubble App adopts a layered architecture with principles of Clean Architecture, SOLID, design patterns, and MVVM (Model-View-ViewModel).",
                "This structure, validated in projects with thousands of users, aims to create apps that are easy to understand and maintain, as well as scalable in terms of codebase and team.",
              ],
        imageUrl:
          "https://github.com/user-attachments/assets/a267e599-5f44-41c9-92c1-be57d53d01e3",
        technologies: [
          "React Native CLI",
          "TypeScript",
          "Jest",
          "Zod",
          "Zustand",
          "TanStack Query",
          "Shopify Restyle",
          "Husky",
          "React Native Vision Camera"
        ],
        buttons: {
          repository: "https://github.com/felizardo27/NubbleApp",
        },
      },
      {
        titleCard: "Portfolio",
        description:
          language === "ptBr"
            ? [
                "Portfólio de Desenvolvedor feito em React",
                "Totalmente personalizável e dinâmico, altere dados e imagens facilmente.",
                "Suporte ao Modo Escuro",
                "Suporte à Troca de Idioma",
                "Gerenciamento de Estado com Zustand",
              ]
            : [
                "Developer Portfolio Website made in React",
                "Fully customisable and dynamic, easily change data and images.",
                "Dark Mode Support",
                "Language toggle Support",
                "Context using Zustand",
              ],
        imageUrl:
          "https://github.com/user-attachments/assets/e6e70203-be1d-4b1a-ba58-f31b2508be21",
        technologies: ["React", "TypeScript", "Styled-Components", "Zustand"],
        buttons: {
          repository: "https://github.com/felizardo27/portfolio",
          liveUrl: "https://felizardo27.com.br",
        },
      },
      {
        titleCard: "Pokedex - React Native",
        description:
          language === "ptBr"
            ? [
                "Projeto Pokédex, um projeto desenvolvido para listar Pokémon da PokeAPI.",
                "Listagem de Pokémon da API, visualização de detalhes dos Pokémon.",
                "Listagem de HP, Ataque e outras estatísticas.",
                "Listagem de habilidades.",
              ]
            : [
                "Project Pokedex, a project designed to list Pokémon from the PokeAPI.",
                "Listing Pokémon from the API, Viewing Pokémon details",
                "Listing HP, Attack, and other stats",
                "Listing abilities",
              ],
        imageUrl:
          "https://camo.githubusercontent.com/13c232afbbdcf5cbffe36aa302e0dfbc33a1963687bf9a6ec744dd738c593689/68747470733a2f2f692e696d6775722e636f6d2f6d64526e3848722e706e67",
        technologies: [
          "React Native",
          "Expo",
          "TypeScript",
          "Styled-Components",
          "Axios",
          "Reanimated V2",
        ],
        buttons: {
          repository: "https://github.com/felizardo27/pokedex-RN",
        },
      },
      {
        titleCard: "Pokedex - React",
        description:
          language === "ptBr"
            ? [
                `Projeto Pokedex desenvolvido em React, usando a api PokeApi.`,
                `Onde traz o id, nome e gif do pokemon`,
                `Possui dois botões para fazer a troca dos pokemons, e uma pesquisa por nome ou por id`,
              ]
            : [
                "Pokedex project developed in React, using the PokeApi.",
                "It displays the ID, name, and GIF of the Pokémon.",
                "It has two buttons to switch between Pokémon, and a search feature by name or ID.",
              ],
        imageUrl:
          "https://user-images.githubusercontent.com/72112006/184494149-f9fbe8a9-4448-457c-9069-66f831626c87.gif",
        technologies: ["React", "TypeScript", "SASS"],
        buttons: {
          repository: "https://github.com/felizardo27/pokedex-react",
          liveUrl: "https://pokedex-felizardo27.vercel.app",
        },
      },
    ],
  };

  return {
    data,
  };
}
