import React from 'react';


const Home = React.lazy(() => import('pages/Home'));
const Page1 = React.lazy(() => import('pages/Page1'));
const Page2 = React.lazy(() => import('pages/Page2'));

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
    auth: true,
    routes: [
      // { path: '/', name: 'Home', component: Home, exact: true }
    ],
  },
  { path: '/page-1', name: 'Page 1', component: Page1, exact: true },
  { path: '/page-2', name: 'Page 2', component: Page2, exact: true },
];

export default routes;
