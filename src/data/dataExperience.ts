//dataExperience

import { useLanguage } from "../context/useLanguage";
import { dataListItemsProps } from "./dataTypes";

export function dataExperience() {
  const { language } = useLanguage();

  const dataPt: dataListItemsProps = {
    title: "Experiências",
    data: [
      {
        title: "Desenvolvedor Front-End jr",
        subText: "AsA Sistemas",
        date: "Abril de 2024 até o momento.",
        description: `
          Desenvolvimento de interfaces web e mobile utilizando JavaScript, TypeScript, React, e React Native.
          Utilização de Styled Components para estilização de componentes.
          Desenvolvimento e manutenção de APIs com Adonis.js, incluindo a criação de novas rotas.
          Utilização de ferramentas de versionamento como Git para controle de versões e colaboração em equipe.
      `,
      },
      {
        title: "Assistente de Suporte de TI jr",
        subText: "Usina Caeté",
        date: "Outubro de 2022 a Março de 2024",
        description: `
          Configuração de ramais, ramais IPs, PABX e cabeamento de ramais.
          Desenvolvimento de scripts em Python e .bat para automação.
          Gerenciamento de redes (endereços IP, pontos de acesso Ubiquiti, crimpagem de cabos de rede).
          Criação de Usuários no AD (Active Directory).
          Administração de firewall (liberação de endereços IP).
      `,
      },
      {
        title: "Auxiliar de TI",
        subText: "Unimed Dracena",
        date: "Março de 2021 a Abril de 2022",
        description: `
          Criação de Relatórios em PowerBI.
          Programação em C# e Python.
          Consultas em SQL Server
          Gerenciamento de VMware (Criação de máquinas virtuais)
          Suporte aos setores (Manutenção em computadores, suporte em impressoras, instalação de programas)
        `,
      },
      {
        title: "Estagiário",
        subText: "Unimed Dracena",
        date: "Outubro de 2019 a março de 2021",
      },
    ],
  };

  const dataEn: dataListItemsProps = {
    title: "Experience",
    data: [
      {
        title: "Junior Front-End Developer",
        subText: "AsA Sistemas",
        date: "April 2024 – Present",
        description: `
          Development of web and mobile interfaces using JavaScript, TypeScript, React, and React Native.
          Utilization of Styled Components for component styling.
          Development and maintenance of APIs with Adonis.js, including the creation of new routes.
          Utilization of version control tools like Git for version management and team collaboration.
      `,
      },
      {
        title: "Junior IT Support Assistant",
        subText: "Usina Caeté",
        date: "October 2022 – March 2024",
        description: `
          Configuration of extensions, IP extensions, PABX, and extension cabling.
          Development of scripts in Python and .bat for automation.
          Network management (IP addresses, Ubiquiti access points, network cable crimping).
          User creation in AD (Active Directory).
          Firewall administration (IP address whitelisting).
      `,
      },
      {
        title: "IT Assistant",
        subText: "Unimed Dracena",
        date: "March 2021 – April 2022",
        description: `
          Creation of reports in PowerBI.
          Programming in C# and Python.
          SQL Server queries.
          VMware management (creation of virtual machines).
          Support for departments (computer maintenance, printer support, software installation).
        `,
      },
      {
        title: "Intern",
        subText: "Unimed Dracena",
        date: "October 2019 – March 2021",
      },
    ],
  };

  return {
    data: language === "ptBr" ? dataPt : dataEn,
  };
}
