// src/data/config.ts - Link + project data for the site (YouTube-safe copy)

export interface LinkItem {
  id?: string;
  title: string;
  href: string;
  description: string;
  primary?: boolean;
  cta?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  status?: string;
  href?: string;
}

export const links: LinkItem[] = [
  {
    title: 'Website',
    href: 'https://robgrappler.io',
    description: 'Primary site and long-term archive.',
    primary: true,
  },
  {
    title: 'YouTube',
    href: 'https://youtube.com/@robgrappl3r',
    description: 'Official videos, highlights, and releases.',
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/rob.grappler',
    description: 'Clips, previews, and updates.',
  },
  {
    title: 'X',
    href: 'https://x.com/robgrappler',
    description: 'Announcements, notes, and public thoughts.',
  },
  {
    id: 'contact',
    title: 'Contact',
    href: 'mailto:contact@robpins.me',
    description: 'Business inquiries and collaborations.',
    cta: 'CONTACT',
  },
];

export const projects: ProjectItem[] = [
  // keep your real projects here (don’t invent random ones)
];