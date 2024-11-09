import { About } from "../pages/About";
import { Education } from "../pages/Education";
import { Experience } from "../pages/Experience";
import { Home } from "../pages/Home/Index";
import { Projects } from "../pages/Projects";
import { Skills } from "../pages/Skills";

interface RoutesPageProps {
  page: () => React.ReactNode;
  pageName: string,
  path: string;
  links?: {
    en: string,
    pt: string
  }
}

export const routesPages: RoutesPageProps[] = [
  {
    page: Home,
    pageName: 'Home',
    path: "/home",
  },
  {
    page: About,
    pageName: 'About',
    path: '/about'
  },
  {
    page: Skills,
    pageName: 'Skills',
    path: '/skills'
  },
  {
    page: Education,
    pageName: 'Education',
    path: '/education'
  },
  {
    page: Experience,
    pageName: 'Experience',
    path: '/experience'
  },
  {
    page: Projects,
    pageName: 'Projects',
    path: '/projects'
  },
  {
    page: Home,
    pageName: 'Resume',
    path: '/Home',
    links: {
      en: 'https://drive.google.com/file/d/1KY-6HSL663sJwYDSRf53a9v6oiMZS7o0/view?usp=sharing',
      pt: 'https://drive.google.com/file/d/1KY-6HSL663sJwYDSRf53a9v6oiMZS7o0/view?usp=sharing'
    }
  },
];