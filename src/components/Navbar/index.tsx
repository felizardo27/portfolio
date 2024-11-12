import { Container, ContainerItems, IconLogo, Menu, MenuItem, MenuMobile, Navigation, IconTheme } from "./styles";
import { useCurrentPage } from "../../context/useCurrentPage";
import { routesPages } from "../../router/routesPath";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/useTheme";

export function Navbar() {
  const {icons, theme, setTheme} = useTheme()
  const { currentPage, setCurrentPage } = useCurrentPage();
  const [menuOpen, setMenuOpen] = useState(false)
  const navigation = useNavigate();

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

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Container>
      <IconLogo src={icons.profileIcon} onClick={() => {
        navigation('/home')
        setCurrentPage('Home')
      }} />
      <Menu>
        <RenderMenuItems />
        <IconTheme onClick={toggleTheme} src={theme === 'dark' ? icons.sunIcon : icons.moonIcon} />
      </Menu>
      <MenuMobile>
        <IconLogo onClick={toggleMenuMobile} src={icons.menuIcon} style={{ cursor: 'pointer' }} />
      </MenuMobile>
      <ContainerItems menuOpen={menuOpen}>
        <RenderMenuItems />
        <IconTheme onClick={toggleTheme} src={theme === 'dark' ? icons.sunIcon : icons.moonIcon} />
      </ContainerItems>
    </Container>
  )
}
