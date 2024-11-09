import { Container, IconLogo, Menu, MenuItem, Navigation } from "./styles";
import iconLogo from '../../assets/svgs/dark/profile.svg'
import { useCurrentPage } from "../../context/useCurrentPage";
import { routesPages } from "../../router/routesPath";

export function Navbar() {
  const { currentPage, setCurrentPage } = useCurrentPage();

  function goTo(url: string | undefined) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  return (
    <Container>
      <IconLogo src={iconLogo} />
      <Menu>
        {routesPages.map(item => (
          item.pageName === 'Resume' ? (
            <MenuItem
              key={item.pageName}
              onClick={() => goTo(item.links?.en)}
            >
              {item.pageName}
            </MenuItem>
          ) : (
            <Navigation
              key={item.pageName}
              to={item.path}
              onClick={() => setCurrentPage(item.pageName)}
            >
              <MenuItem isActive={item.pageName === currentPage}>
                {item.pageName}
              </MenuItem>
            </Navigation>
          )
        ))}
      </Menu>
    </Container>
  )
}
