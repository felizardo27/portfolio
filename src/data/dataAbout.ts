import { useLanguage } from "../context/useLanguage";
import { getMyAge } from "../functions/getMyAge";

export function dataAbout() {
  const { language } = useLanguage();
  const myAge = getMyAge('12/27/1999')

  const aboutPt = {
    title: "Sobre",
    description: `Meu nome é João Pedro, tenho ${myAge} anos e sou formado em Ciência da Computação. Como desenvolvedor front-end com um ano de experiência, atuo na criação de interfaces interativas e responsivas utilizando ReactJS e React Native. Tenho experiência no desenvolvimento de aplicações web e mobile, garantindo performance e usabilidade.

    Além disso, também possuo experiência no backend, criando rotas e integrando APIs. Tenho compreensão intermediária do inglês e busco sempre aprimorar minhas habilidades e acompanhar as melhores práticas do mercado para entregar soluções eficientes e escaláveis.
`
  }

  const aboutEn = {
    title: "About",
    description: `My name is João Pedro, I am ${myAge} years old, and I have a Bachelor's degree in Computer Science. As a front-end developer with one year of experience, I work on creating interactive and responsive user interfaces using ReactJS and React Native. I have hands-on experience developing web and mobile applications, ensuring high performance and seamless user experiences.

    Additionally, I have experience in backend development, creating routes and integrating APIs. I have an intermediate level of English and continuously strive to enhance my skills and stay up to date with industry best practices to deliver efficient and scalable solutions.`
  }

  return {
    data: language === "ptBr" ? aboutPt : aboutEn,
  };
}
