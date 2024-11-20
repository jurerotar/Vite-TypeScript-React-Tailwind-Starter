import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type FCWithChildren, useState } from 'react';

type StateProviderProps = {
  queryClient?: QueryClient;
};

export const StateProvider: FCWithChildren<StateProviderProps> = ({ children, queryClient: providedQueryClient }) => {
  const [queryClient] = useState<QueryClient>(providedQueryClient ?? new QueryClient());

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
