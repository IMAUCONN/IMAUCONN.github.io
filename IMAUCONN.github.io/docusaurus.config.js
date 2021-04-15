module.exports = {
  title: 'UConn IMA',
  tagline: 'Cool line of text to talk about',
  url: 'https://IMAUCONN.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'IMAUCONN', // Usually your GitHub org/user name.
  projectName: 'IMAUCONN.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'UConn IMA',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: '/about_us/',
          label: 'About Us',
          position: 'left',
        },
        {
          to: '/members/',
          label: 'Members',
          position: 'left',
        },
        {
          to: '/company/',
          label: 'Company',
          position: 'left',
        },
        {
          to: '/news/',
          label: 'News',
          position: 'left',
        },
        {
          to: '/technology/',
          label: 'Technology',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social Media',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/imauconn/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/UConnIMA/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/rhN7pYrWVV',
            },
            {
              label: 'UCONN Reddit',
              href: 'https://www.reddit.com/r/UCONN/',
            },
            {
              label: 'OPIM Innovate',
              href: 'https://innovatelabs.uconn.edu/',
            },
          ],
        },
        {
          title: 'Projects',
          items: [
            {
              label: 'Tech Kits',
              href: 'https://innovatelabs.uconn.edu/opim-innovate-2/opim-innovate-tech-kit-2/',
            },
            {
              label: 'IMA GitHub',
              href: 'https://github.com/IMAUCONN',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
