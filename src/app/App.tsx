import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterHash } from './router/RouterHash';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterHash />
    </QueryClientProvider>
  );
};
