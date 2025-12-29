export type LinkItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  cta?: string;
  primary?: boolean;
};

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  status?: string;
};

export const links: LinkItem[] = [
  {
    id: 'youtube',
    title: 'YouTube',
    description: 'Primary channel and latest uploads.',
    href: 'https://www.youtube.com/@robgrappler',
    cta: 'OPEN',
    primary: true
  },
  {
    id: 'instagram',
    title: 'Instagram',
    description: 'Short clips and updates.',
    href: 'https://www.instagram.com/robgrappler',
    cta: 'OPEN'
  },
  {
    id: 'x',
    title: 'X / Twitter',
    description: 'Thoughts, notes, and announcements.',
    href: 'https://x.com/robgrappler',
    cta: 'OPEN'
  },
  {
    id: 'contact',
    title: 'Contact',
    description: 'Email for collaborations and inquiries.',
    href: 'mailto:hello@robgrappler.io',
    cta: 'EMAIL'
  },
  {
    id: 'website',
    title: 'Main site',
    description: 'Official website and archive.',
    href: 'https://robgrappler.io',
    cta: 'OPEN'
  }
];

export const projects: ProjectItem[] = [
  {
    id: 'project-core',
    title: 'Project Core',
    description: 'A minimal training archive in progress.',
    status: 'In progress'
  },
  {
    id: 'project-signal',
    title: 'Project Signal',
    description: 'Research notes and highlights.',
    status: 'Draft'
  },
  {
    id: 'project-archive',
    title: 'Project Archive',
    description: 'Curated playlists and resources.',
    status: 'Planned'
  }
];
