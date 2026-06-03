import React, { useEffect, useState } from "react";
import { useLanguageStore } from "../../context/useLanguageStore";
import { ToggleTheme } from "../../components/ToggleTheme";
import { ToggleLanguage } from "../../components/ToggleLanguage";
import { ArrowRight } from "lucide-react";
import {
  LinksLayout,
  HeaderControls,
  ProfileCard,
  AvatarWrapper,
  AvatarImage,
  ProfileName,
  ProfileUsername,
  ProfileBio,
  LinksContainer,
  LinkButton,
  LinkContent,
  LinkIconWrapper,
  LinkArrow,
  SpotifyResponsiveEmbed,
  Footer,
} from "./styles";
import { Icon } from "../../components/Icon";
import { useFirebaseStore } from "../../context/useFirebaseData";
import { useAnalytics } from "../../hooks/useAnalytics";
import { NowPlayingBadge } from "../../components/NowPlayingBadge";

export const LinksPage: React.FC = () => {
  const { language } = useLanguageStore();
  const { database, getData, initAnalytics } = useFirebaseStore();
  const { track } = useAnalytics();

  useEffect(() => {
    const loadFirebase = async () => {
      try {
        if (!database) {
          await getData();
          await initAnalytics();
        }
      } catch (err) {
        console.error("Failed to load database in LinksPage:", err);
      } finally {
        track("view_links_page")
      }
    };
    loadFirebase();
  }, [getData, database]);

  const isEn = language === "en";

  const profileBio = {
    en: "Full Stack & Mobile Developer from Brazil. Creating modern web apps, mobile products, and automation tools.",
    pt: "Desenvolvedor Full Stack e Mobile. Criando aplicações web modernas, produtos mobile e ferramentas de automação.",
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 25 },
    },
  };

  return (
    <LinksLayout>
      <HeaderControls>
        <ToggleLanguage />
        <ToggleTheme />
      </HeaderControls>

      <ProfileCard
        id="links-profile-card"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <AvatarWrapper>
          <AvatarImage
            src="https://github.com/felizardo27.png"
            alt="Joao Pedro Felizardo Avatar"
            onError={(e) => {
              const image = e.target as HTMLImageElement;

              image.src =
                "https://avatars.githubusercontent.com/u/89668494?v=4";
            }}
          />
          <NowPlayingBadge />
        </AvatarWrapper>

        <ProfileName>João Pedro Felizardo</ProfileName>
        <ProfileUsername>felizardo27</ProfileUsername>

        <ProfileBio>{isEn ? profileBio.en : profileBio.pt}</ProfileBio>

        <LinksContainer>
          {database?.socialLinks?.data?.map((link, index) => {
            return (
              <LinkButton
                key={link.id}
                id={`link-${link.id}`}
                href={link.url}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noreferrer" : undefined}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <LinkContent>
                  <LinkIconWrapper>
                    <Icon name={link.icon} size={18} />
                  </LinkIconWrapper>

                  <span>{link.label}</span>
                </LinkContent>

                <LinkArrow className="link-icon-arrow">
                  <ArrowRight size={16} />
                </LinkArrow>
              </LinkButton>
            );
          })}
        </LinksContainer>
      </ProfileCard>

      {database?.socialLinks?.["spotify-playlist"] && (
        <ProfileCard>
          <SpotifyResponsiveEmbed>
            <iframe
              data-testid="embed-iframe"
              src={database?.socialLinks?.["spotify-playlist"]?.url}
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </SpotifyResponsiveEmbed>
        </ProfileCard>
      )}
      <Footer>
        &lt; felizardo27_ <span>/&gt;</span> //{" "}
        {isEn ? "ALL SYSTEMS OPERATIONAL" : "SISTEMAS ONLINE"}
      </Footer>
    </LinksLayout>
  );
};
