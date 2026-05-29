export type DatabaseProps = {
  about: {
    pt: AboutProps;
    en: AboutProps;
  };

  resume: {
    pt: ResumeProps;
    en: ResumeProps;
  };

  education: {
    pt: ListItemsProps;
    en: ListItemsProps;
  };

  experience: {
    pt: ListItemsProps;
    en: ListItemsProps;
  };

  skills: {
    title: {
      ptBr: string;
      enUs: string;
    };
    data: Record<number, SkillCategoryProps> | Record<string, SkillCategoryProps>;
  };

  projects: {
    title: {
      pt: string;
      en: string;
    };
    data: Record<number, ProjectProps> | Record<string, ProjectProps>;
  };

  socialLinks: Record<number, SocialLinkProps> | Record<string, SocialLinkProps>;
};

export type AboutProps = {
  title: string;
  description: string;
};

export type ResumeProps = {
  url: string;
};

export type ListItemsProps = {
  title: string;
  data: Record<number, ListItemProps> | Record<string, ListItemProps>;
};

export type ListItemProps = {
  date: string;
  title: string;
  subTitle?: string;
  type?: string;
  description?: string;
  url?: string;
};

export type SkillCategoryProps = {
  title: {
    ptBr: string;
    enUs: string;
  };
  icons: Record<number, SkillIconProps> | Record<string, SkillIconProps>;
};

export type SkillIconProps = {
  name: string;
  url: string;
};

export type ProjectProps = {
  title: string;
  description: {
    pt: Record<number, string> | Record<string, string>;
    en: Record<number, string> | Record<string, string>;
  };
  imageUrl: string;
  technologies: Record<number, string> | Record<string, string>;
  buttons: {
    repository: string;
    liveUrl?: string;
  };
};

export type SocialLinkProps = {
  name: string;
  url: string;
  icon?: string;
};

export interface Project {
  id: string;
  title: string;
  category: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: {
    en: string;
    pt: string;
  };
  period: {
    en: string;
    pt: string;
  };
  responsibilities: {
    en: string[];
    pt: string[];
  };
  technologies: string[];
}
