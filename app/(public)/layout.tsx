import type React from 'react';
import { Outlet } from 'react-router';

export const PublicLayout: React.FC = () => {
  return <Outlet />;
};
