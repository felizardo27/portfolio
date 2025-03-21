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
    data: Record<number, SkillCategoryProps>;
  };
  projects: {
    title: {
      pt: string;
      en: string;
    },
    data: Record<number, ProjectProps>;
  };
};

type AboutProps = {
  title: string;
  description: string;
};

type ResumeProps = {
  url: string;
};

type ListItemsProps = {
  title: string;
  data: Record<number, ListItemProps>;
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
  icons: Record<number, SkillIconProps>;
};

export type SkillIconProps = {
  name: string;
  url: string;
};

export type ProjectProps = {
  title: string;
  description: {
    pt: Record<number, string>;
    en: Record<number, string>;
  };
  imageUrl: string;
  technologies: Record<number, string>;
  buttons: {
    repository: string;
    liveUrl?: string;
  };
};
