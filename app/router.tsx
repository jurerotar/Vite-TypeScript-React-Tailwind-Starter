import { type RouteObject, createBrowserRouter } from 'react-router-dom';
import { PublicLayout } from 'app/(public)/layout';
import { HomePage } from 'app/(public)/(index)/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
