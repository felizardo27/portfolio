export interface skillsItem {
  title: {
    enUs: string;
    ptBr: string;
  };
  icons: {
    name: string;
    url: string;
  }[];
}

interface DataSkills {
  title: {
    ptBr: string;
    enUs: string;
  };
  data: skillsItem[];
}

export const dataSkills: DataSkills = {
  title: {
    ptBr: "Habilidades",
    enUs: "Skills"
  }, 
  data: [
    {
      title: {
        enUs: "Languages & Databases",
        ptBr: "Linguagens & Bancos de Dados"
      },
      icons: [
        {
          name: "JavaScript",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
        },
        {
          name: "TypeScript",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
        },
        {
          name: "Python",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        },
        {
          name: "MySQL",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        },
        {
          name: "C#",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg",
        },
      ],
    },
    {
      title: {
        enUs: "Frameworks & Technologies",
        ptBr: "Frameworks & Tecnologias"
      },
      icons: [
        {
          name: "Adonis",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/adonisjs/adonisjs-original.svg",
        },
        {
          name: "React",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
          name: "React Native",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
          name: "NodeJS",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg",
        },
        {
          name: "NextJS",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        },
      ],
    },
    {
      title: {
        enUs: "Tools & Platforms",
        ptBr: "Ferramentas & Plataformas"
      },
      icons: [
        {
          name: "Android Studio",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
        },
        {
          name: "XCode",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg",
        },
        {
          name: "Insomnia",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg",
        },
        {
          name: "Docker",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        },
        {
          name: "Git",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        },
        {
          name: "Linux",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        },
      ],
    },
  ]
}


