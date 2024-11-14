import { About } from "../pages/About";
import { Education } from "../pages/Education";
import { Experience } from "../pages/Experience";
import { Home } from "../pages/Home/Index";
import { Projects } from "../pages/Projects";
import { Skills } from "../pages/Skills";

interface RoutesPageProps {
  page: () => React.ReactNode;
  pageName: {
    ptBr: string;
    enUs: string
  },
  path: string;
  links?: {
    ptBr: string,
    enUs: string
  }
}

export const routesPages: RoutesPageProps[] = [
  {
    page: Home,
    pageName: {
      ptBr: 'Início',
      enUs: 'Home'
    },
    path: '/home',
  },
  {
    page: About,
    pageName: {
      ptBr: 'Sobre',
      enUs: 'About'
    },
    path: '/about',
  },
  {
    page: Skills,
    pageName: {
      ptBr: 'Habilidades',
      enUs: 'Skills'
    },
    path: '/skills',
  },
  {
    page: Education,
    pageName: {
      ptBr: 'Educação',
      enUs: 'Education'
    },
    path: '/education',
  },
  {
    page: Experience,
    pageName: {
      ptBr: 'Experiência',
      enUs: 'Experience'
    },
    path: '/experience',
  },
  {
    page: Projects,
    pageName: {
      ptBr: 'Projetos',
      enUs: 'Projects'
    },
    path: '/projects',
  },
  {
    page: Home,
    pageName: {
      ptBr: 'Currículo',
      enUs: 'Resume'
    },
    path: '/resume',
    links: {
      ptBr: 'https://drive.google.com/file/d/1kd7UrYY_vkBYN2XcF_meekisro2KUCeJ/view?usp=sharing',
      enUs: 'https://drive.google.com/file/d/1KY-6HSL663sJwYDSRf53a9v6oiMZS7o0/view?usp=sharing'
    }
  },
];