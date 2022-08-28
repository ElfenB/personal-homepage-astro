export interface NavbarItem {
  name: string
  path: string
}

export const items: NavbarItem[] = [
  {
    name: 'About this Blog',
    path: '/blog/about',
  },
  {
    name: 'Blog with Astro',
    path: '/blog/astroblog',
  },
]
