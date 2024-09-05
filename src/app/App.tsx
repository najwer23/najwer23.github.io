import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterHash } from './router/RouterHash';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-SMX3LNRJNF');

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterHash />
    </QueryClientProvider>
  );
};
