import { useLanguage } from "../context/useLanguage";
import { useTheme } from "../context/useTheme";
import { dataListItemsProps } from "./dataTypes";


export function dataEducation() {
  const { icons } = useTheme();
  const { language } = useLanguage();

  const dataPt: dataListItemsProps = {
    title: "Formações",
    data: [
      {
        imageUrl: "https://github.com/alura.png",
        date: "31 de maio de 2022 a 23 de maio de 2023",
        title: "Alura",
        subText: "",
        linkTo:
          "https://cursos.alura.com.br/user/felizardo27/fullCertificate/2d273116031bc91b38694b70308d5b96?lang=pt_BR",
      },
      {
        imageUrl: "https://github.com/alura.png",
        date: "01 de Outubro de 2022",
        title: "Formação React com TypeScript",
        subText: "Alura",
        linkTo:
          "https://cursos.alura.com.br/degree/certificate/f0b4f097-a4da-41b0-b0bc-cebd1c825e65?lang=pt_BR",
      },
      {
        imageUrl: "https://github.com/alura.png",
        date: "27 de Julho de 2022",
        title: "Formação Redes de Computadores",
        subText: "Alura",
        linkTo:
          "https://cursos.alura.com.br/degree/certificate/2cde5fe5-ca7f-484d-adf5-22f823d86b22?lang=pt_BR",
      },
      {
        imageUrl: "https://github.com/alura.png",
        date: "27 de Junho de 2022",
        title: "Formação Front-end",
        subText: "Alura",
        linkTo:
          "https://cursos.alura.com.br/degree/certificate/be0d634b-feb7-4951-a1f2-b4b2fa6cc355?lang=pt_BR",
      },
      {
        imageUrl: icons.educationIcon,
        date: "2018-2022",
        title: "Ciência da Computação",
        subText: "UNIFAI - Adamantina",
      },
    ],
  };

  const dataEn: dataListItemsProps = {
    title: "Education",
    data: [
      {
        imageUrl: "https://github.com/alura.png",
        date: "May 31, 2022 to May 23, 2023",
        title: "Alura",
        subText: "",
        linkTo:
          "https://cursos.alura.com.br/user/felizardo27/fullCertificate/2d273116031bc91b38694b70308d5b96?lang=en",
      },
      {
        imageUrl: "https://github.com/alura.png",
        date: "October 01, 2022",
        title: "Degree React with TypeScript",
        subText: "Alura",
        linkTo:
          "https://cursos.alura.com.br/degree/certificate/f0b4f097-a4da-41b0-b0bc-cebd1c825e65?lang=en",
      },
      {
        imageUrl: "https://github.com/alura.png",
        date: "July 27, 2022",
        title: "Degree Computer network",
        subText: "Alura",
        linkTo:
          "https://cursos.alura.com.br/degree/certificate/2cde5fe5-ca7f-484d-adf5-22f823d86b22?lang=en",
      },
      {
        imageUrl: "https://github.com/alura.png",
        date: "June 27, 2022",
        title: "Degree Front-end",
        subText: "Alura",
        linkTo:
          "https://cursos.alura.com.br/degree/certificate/be0d634b-feb7-4951-a1f2-b4b2fa6cc355?lang=en",
      },
      {
        imageUrl: icons.educationIcon,
        date: "2018-2022",
        title: "Computer Science",
        subText: "UNIFAI - Adamantina",
      },
    ],
  };

  return {
    data: language === "ptBr" ? dataPt : dataEn,
  };
}
