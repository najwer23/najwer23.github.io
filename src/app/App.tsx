import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { RouterHash } from './router/RouterHash';
import ReactGA from 'react-ga4';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

ReactGA.initialize('G-SMX3LNRJNF');

const queryClient = new QueryClient();

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterHash />
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </QueryClientProvider>
  );
};

// export const App = () => {
//   return (
//     <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
//       <RouterHash />
//       {/* <ReactQueryDevtools initialIsOpen /> */}
//     </PersistQueryClientProvider>
//   );
// };
