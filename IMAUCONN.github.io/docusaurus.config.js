module.exports = {
  //title for the homepage and browser
  title: 'Uconn IMA',
  //tagline for the homepage
  tagline: 'The Information Management Association (IMA) at the University of Connecticut is a student-run organization that provides resources for students interested in the field of Information Technology. Our meetings and events involve inviting IT representatives from various industries to speak to students about their company, job prospects in the field, recruitment, informational sessions, resume building, conduct mock interviews, and the art of networking.',
  //URL of the site DO NOT TOUCH
  url: 'https://IMAUCONN.github.io',
  //root directory of the site
  baseUrl: '/',
  //If a link is broken throws error or warning
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  //Icon for the browser header
  favicon: 'img/ima_logo_white.png',
  //These link to the Github Repo
  organizationName: 'IMAUCONN', // Usually your GitHub org/user name.
  projectName: 'IMAUCONN.github.io', // Usually your repo name.
  //changes the theme and color of the website 
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    //Header of every page in the site
    navbar: {
      title: 'UConn IMA',
      style: 'dark',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ima_logo.png',
      },
      //list of items on the nav bar
      items: [
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
      ],
    },
    //footer component for each page
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
      ]
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
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
