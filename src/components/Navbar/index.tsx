import { Container, ContainerItems, IconLogo, Menu, MenuItem, MenuMobile, Navigation, Icon } from "./styles";
import { useCurrentPage } from "../../context/useCurrentPage";
import { routesPages } from "../../router/routesPath";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/useTheme";
import { useLanguage } from "../../context/useLanguage";
import { dataResume } from "../../data/dataResume";

export function Navbar() {
  const { icons, theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const { currentPage, setCurrentPage } = useCurrentPage();
  const [menuOpen, setMenuOpen] = useState(false)
  const navigation = useNavigate();

  const {data} = dataResume();

  function goTo(url: string | undefined) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  function toggleMenuMobile() {
    setMenuOpen(!menuOpen)
  }

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  function toggleLanguage() {
    setLanguage(language === "ptBr" ? 'enUs' : 'ptBr')
  }

  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(!menuOpen)
    }
  }, [currentPage, theme])

  function RenderMenuItems() {
    return (
      routesPages.map(item => (
        item.path === '/resume' ? (
          <MenuItem
            key={item.pageName[language]}
            onClick={() => goTo(data)}
          >
            {item.pageName[language]}
          </MenuItem>
        ) : (
          <Navigation
            key={item.pageName[language]}
            to={item.path}
            onClick={() => {
              menuOpen && toggleMenuMobile()
              setCurrentPage(item.pageName[language])
            }}
          >
            <MenuItem isActive={item.pageName[language] === currentPage}>
              {item.pageName[language]}
            </MenuItem>
          </Navigation>
        )
      )))
  }


  return (
    <Container>
      <IconLogo src={icons.profileIcon} onClick={() => {
        navigation('/home')
        setCurrentPage('Home')
      }} />
      <Menu>
        <RenderMenuItems />
        <Icon onClick={toggleTheme} src={theme === 'dark' ? icons.sunIcon : icons.moonIcon} />
        <Icon onClick={toggleLanguage} src={language === 'ptBr' ? icons.brazilFlagIcon : icons.usaFlagIcon} />
      </Menu>
      <MenuMobile>
        <IconLogo onClick={toggleMenuMobile} src={icons.menuIcon} style={{ cursor: 'pointer' }} />
        <Icon onClick={toggleLanguage} src={language === 'ptBr' ? icons.brazilFlagIcon : icons.usaFlagIcon} />
      </MenuMobile>
      <ContainerItems menuOpen={menuOpen}>
        <RenderMenuItems />
        <MenuItem onClick={toggleTheme}>
          <Icon src={theme === 'dark' ? icons.sunIcon : icons.moonIcon} />{`Modo ${theme === `dark` ? 'light' : 'dark'}`}
        </MenuItem>
      </ContainerItems>
    </Container>
  )
}
