export interface Link {
  name: string
  to: string
  icon: string
}

export const links: Link[] = [
  {
    name: 'Photography',
    to: 'https://www.instagram.com/ben_clickclick',
    icon: '/img/instagram.svg',
  },
  {
    name: 'Blog',
    to: '/blog/about',
    icon: '/img/blog.svg',
  },
  {
    name: 'Coding',
    to: 'https://www.github.com/ElfenB',
    icon: '/img/github.svg',
  },
]
