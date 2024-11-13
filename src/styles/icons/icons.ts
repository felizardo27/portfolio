import { darkIcons } from "./darkIcons"
import { lightIcons } from "./lighIcons"



const iconsDark = {
  githubIcon: darkIcons.githubIcon,
  linkedinIcon: darkIcons.linkedinIcon,
  emailIcon: darkIcons.emailIcon,
  sunIcon: darkIcons.sunIcon,
  moonIcon: darkIcons.moonIcon,
  profileIcon: darkIcons.profileIcon,
  menuIcon: darkIcons.menuIcon,
  educationIcon: darkIcons.educationIcon,
  arrowLinkIcon: darkIcons.arrowLinkIcon,
  arrowLinkDefaultIcon: darkIcons.arrowLinkDefaultIcon,
}

const iconsLight: typeof iconsDark = {
  githubIcon: lightIcons.githubIcon,
  linkedinIcon: lightIcons.linkedinIcon,
  emailIcon: lightIcons.emailIcon,
  sunIcon: lightIcons.sunIcon,
  moonIcon: lightIcons.moonIcon,
  profileIcon: lightIcons.profileIcon,
  menuIcon: lightIcons.menuIcon,
  educationIcon: lightIcons.educationIcon,
  arrowLinkIcon: lightIcons.arrowLinkIcon,
  arrowLinkDefaultIcon: lightIcons.arrowLinkDefaultIcon,
}

export const icons = {
  iconsDark, 
  iconsLight
} 

export type IconsProps = typeof iconsDark

