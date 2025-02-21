import { useLanguage } from "../context/useLanguage";
import { getMyAge } from "../functions/getMyAge";

export function dataAbout() {
  const { language } = useLanguage();
  const myAge = getMyAge('12/27/1999')

  const aboutPt = {
    title: "Sobre",
    description: `Meu nome é João Pedro, tenho ${myAge} anos e sou formado em Ciência da Computação, com especialização em desenvolvimento de software. Com três anos de experiência inicial em Suporte de TI, atualmente focado como desenvolvedor front-end júnior, utilizando ReactJs e React Native para criar interfaces interativas e responsivas. Possuo compreensão intermediária do idioma inglês, buscando constantemente expandir meu conhecimento e habilidades técnicas.`
  }

  const aboutEn = {
    title: "About",
    description: `My name is João Pedro, I am ${myAge} years old, and I have a degree in Computer Science with a specialization in software development. With three years of initial experience in IT support, I am currently focused as a junior front-end developer, using ReactJS and React Native to create interactive and responsive interfaces. I have an intermediate understanding of English and am constantly striving to expand my knowledge and technical skills.`
  }

  return {
    data: language === "ptBr" ? aboutPt : aboutEn,
  };
}
