import { Container, IconLogo, Menu, MenuItem, Navigation } from "./styles";
import iconLogo from '../../assets/svgs/dark/profile.svg'
import { useCurrentPage } from "../../context/useCurrentPage";

interface PagesProps {
  pageName: string;
  pagePath: string;
}

export function Navbar() {
  const { currentPage, setCurrentPage } = useCurrentPage();


  const pages: PagesProps[] = [
    { pageName: 'Home', pagePath: '/home' },
    { pageName: 'About', pagePath: '/about' },
    { pageName: 'Skills', pagePath: '/skills' },
    { pageName: 'Education', pagePath: '/education' },
    { pageName: 'Experience', pagePath: '/experience' },
    { pageName: 'Projects', pagePath: '/projects' },
    { pageName: 'Resume', pagePath: '/resume' },
  ]

  return <Container>
    <IconLogo src={iconLogo} />


    <Menu>
      {pages.map(item => (
        <Navigation to={item.pagePath} onClick={() => setCurrentPage(item.pageName)}>
          <MenuItem isActive={item.pageName === currentPage ? true : false}
            onClick={() => console.log(item.pagePath)}>{item.pageName}</MenuItem>
        </Navigation>
      ))}
    </Menu>

  </Container>;
}
