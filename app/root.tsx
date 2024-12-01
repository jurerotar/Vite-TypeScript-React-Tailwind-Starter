import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router';
import { StateProvider } from './providers/state-provider';
import './styles/styles.scss';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <StateProvider>
      <RouterProvider router={router} />
    </StateProvider>
  </StrictMode>,
);
