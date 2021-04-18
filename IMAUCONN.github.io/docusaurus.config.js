module.exports = {
  title: 'UConn IMA',
  tagline: 'The Information Management Association (IMA) at the University of Connecticut is a student-run organization that provides resources for students interested in the field of Information Technology. Our meetings and events involve inviting IT representatives from various industries to speak to students about their company, job prospects in the field, recruitment, informational sessions, resume building, conduct mock interviews, and the art of networking.',
  url: 'https://IMAUCONN.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/headshots/icon1.ico',
  organizationName: 'IMAUCONN', // Usually your GitHub org/user name.
  projectName: 'IMAUCONN.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'UConn IMA',
      logo: {
        alt: 'My Site Logo',
        src: 'img/headshots/logo.jpg',
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
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
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
              to: 'https://www.instagram.com/imauconn//',
            },
            {
              label: 'Facebook',
              to: 'https://www.facebook.com/UConnIMA',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'MIS Discord',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Uconn Reddit',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Linkedln',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'Projects',
          items: [
            {
              label: 'IMA Github',
              to: 'blog',
            },
            {
              label: 'Tech Kits',
              href: 'https://github.com/facebook/docusaurus',
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
