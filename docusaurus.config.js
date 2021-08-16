/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: 'INTL',
  tagline: 'The tagline of my site',
  url: require('./config.js').url,
  baseUrl: '/docs/intlsdk/', 
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.png',
  themeConfig: {
    prism:{      
      theme: require('prism-react-renderer/themes/github'),
      additionalLanguages: ["csharp","java"],
    },
    navbar: {
      title: 'Pub.Tech.',
      items: [
        {
          label: '开发指南',
          position: 'left',
          type: 'doc',
          docId: 'ProductOverview',
        },
        {
          label: 'SDK',
          position: 'left',
          type: 'doc',
          docId: 'SDK/SDKOverview',
        },
        {
          label: '后台 API',
          position: 'left',
          type: 'doc',
          docId: 'Backend/BackendOverview',
        },
        {
          label: '专业术语',
          position: 'left',
          type: 'doc',
          docId: 'Terminology',
        },
        {
          label: '更新日志',
          position: 'left',
          type: 'doc',
          docId: 'ReleaseNote',
        },
        {
          label: '联系我们',
          position: 'left',
          type: 'doc',
          docId: 'ContactInfo',
        },
        {
          label: 'INTLSDK 文档',
          position: 'right',
          items:
          [
            {
              label: 'GDOS 文档',
              to:'redirect/gdos',
              target: '_self', 
            },
            {
              label: 'PlayerConsole 文档',
              to:'redirect/playerconsole',
              target: '_self', 
            },
            {
              label: 'GameEvent 文档',
              to:'redirect/gameevent',
              target: '_self', 
            },
            /*
            {
              label: 'Localization 文档',
              href: 'http://intldocsnew.intlgame.com/docs/Localization',  
              target: '_self', 
            },
            */
          ],
        },
        /*{
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: 
          [
            {
              to: '/versions',
              label: 'All versions',
            },
          ],
        },*/
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      /*links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
          ],
        },
      ],*/
      copyright: `Copyright © ${new Date().getFullYear()} Proxima Beta Pte. Ltd. All Rights Reserved.`,
    },
    colorMode:{
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  },
  plugins:[
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexBlog: false,
        language: ["en", "zh"],
        docsRouteBasePath: "/",
        indexPages: true, //workaround : https://github.com/easyops-cn/docusaurus-search-local/issues/42
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          //editUrl: '',
          includeCurrentVersion:true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'zh',
    //locales: ['zh','en','kr'],
    locales: ['zh','en'],
    localeConfigs: {
      zh: {
        label: '中文',
      },
      en: {
        label: 'English',
      },
      kr: {
        label: '한국어',
      },
    },
  },
};
