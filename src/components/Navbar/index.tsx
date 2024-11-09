import { Container, ContainerItems, IconLogo, Menu, MenuItem, MenuMobile, Navigation } from "./styles";
import iconLogo from '../../assets/svgs/dark/profile.svg'
import iconMenuMobile from '../../assets/svgs/dark/menu.svg'
import { useCurrentPage } from "../../context/useCurrentPage";
import { routesPages } from "../../router/routesPath";
import { useState } from "react";

export function Navbar() {
  const { currentPage, setCurrentPage } = useCurrentPage();
  const [menuOpen, setMenuOpen] = useState(false)

  function goTo(url: string | undefined) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  function toggleMenuMobile() {
    setMenuOpen(!menuOpen)
  }

  function RenderMenuItems() {
    return (
      routesPages.map(item => (
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
            onClick={() => {
              menuOpen && toggleMenuMobile()
              setCurrentPage(item.pageName)
            }}
          >
            <MenuItem isActive={item.pageName === currentPage}>
              {item.pageName}
            </MenuItem>
          </Navigation>
        )
      )))
  }

  return (
    <Container>
      <IconLogo src={iconLogo} />
      <Menu>
        <RenderMenuItems />
      </Menu>
      <MenuMobile>
        <IconLogo onClick={toggleMenuMobile} src={iconMenuMobile} style={{ cursor: 'pointer' }} />
      </MenuMobile>
      <ContainerItems menuOpen={menuOpen}>
        <RenderMenuItems />
      </ContainerItems>
    </Container>
  )
}
