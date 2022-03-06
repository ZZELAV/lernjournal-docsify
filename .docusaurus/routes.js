
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','de5'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/','a8c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/M122/',
        component: ComponentCreator('/docs/M122/','6ce'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/M126/',
        component: ComponentCreator('/docs/M126/','fec'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/M226B/',
        component: ComponentCreator('/docs/M226B/','9ce'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/M239/',
        component: ComponentCreator('/docs/M239/','4b5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
