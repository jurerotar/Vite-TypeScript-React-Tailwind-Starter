import { QueryClient } from '@tanstack/react-query';
import { render, renderHook } from '@testing-library/react';
import { StateProvider } from 'app/providers/state-provider';
import { composeComponents } from 'app/utils/jsx';
import type React from 'react';
import type { FCWithChildren } from 'react';

type RenderOptions = {
  path?: string;
  queryClient?: QueryClient;
  // Wrap your component with layout(s). If property is missing, default layout will be used.
  wrapper?: FCWithChildren[] | FCWithChildren;
};

const TestingEnvironment: FCWithChildren<RenderOptions> = (props) => {
  const { wrapper = [], children, queryClient: providedQueryClient } = props;

  const queryClient = providedQueryClient ?? new QueryClient();

  return (
    <StateProvider queryClient={queryClient}>{composeComponents(children, Array.isArray(wrapper) ? wrapper : [wrapper])}</StateProvider>
  );
};

const defaultOptions: RenderOptions = {
  wrapper: [],
};

export const renderHookWithContext = <TProps, TResult>(callback: (props: TProps) => TResult, options?: RenderOptions) => {
  return renderHook(callback, {
    wrapper: ({ children }) => <TestingEnvironment {...{ ...defaultOptions, ...options }}>{children}</TestingEnvironment>,
  });
};

export const renderWithContext = <T = HTMLElement>(
  ui: React.ReactElement<T, string | React.JSXElementConstructor<T>>,
  options?: RenderOptions,
) => {
  return render(ui, {
    wrapper: ({ children }) => <TestingEnvironment {...{ ...defaultOptions, ...options }}>{children}</TestingEnvironment>,
  });
};
