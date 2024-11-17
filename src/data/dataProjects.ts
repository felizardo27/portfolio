import { CardProps } from "../components/Card";
import { useLanguage } from "../context/useLanguage";
import { DataProps } from "./dataTypes";

import nubbleApp from "../assets/projects/nubbleApp.png";
import protfolio from "../assets/projects/protfolio.png";
import pokedexRN from "../assets/projects/pokedexRN.png";
import pokedexReact from "../assets/projects/pokedexReact.gif";

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
        imageUrl: nubbleApp,
        technologies: [
          "React Native CLI",
          "TypeScript",
          "Jest",
          "Zod",
          "Zustand",
          "TanStack Query",
          "Shopify Restyle",
          "Husky",
          "React Native Vision Camera",
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
        imageUrl: protfolio,
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
        imageUrl: pokedexRN,
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
        imageUrl: pokedexReact,
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
