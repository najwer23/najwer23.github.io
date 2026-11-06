import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Theme } from 'najwer23morsels/lib/Theme';
import { RouterHash } from './router/RouterHash';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme name={'default'}>
        <RouterHash />
      </Theme>
    </QueryClientProvider>
  );
};
