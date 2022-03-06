
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/lernjournal/blog/archive',
    component: ComponentCreator('/lernjournal/blog/archive','05a'),
    exact: true
  },
  {
    path: '/lernjournal/markdown-page',
    component: ComponentCreator('/lernjournal/markdown-page','6ec'),
    exact: true
  },
  {
    path: '/lernjournal/docs',
    component: ComponentCreator('/lernjournal/docs','107'),
    routes: [
      {
        path: '/lernjournal/docs/',
        component: ComponentCreator('/lernjournal/docs/','1ed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/lernjournal/docs/M122/',
        component: ComponentCreator('/lernjournal/docs/M122/','2db'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/lernjournal/docs/M126/',
        component: ComponentCreator('/lernjournal/docs/M126/','925'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/lernjournal/docs/M226B/',
        component: ComponentCreator('/lernjournal/docs/M226B/','adc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/lernjournal/docs/M239/',
        component: ComponentCreator('/lernjournal/docs/M239/','051'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/lernjournal/',
    component: ComponentCreator('/lernjournal/','451'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
