
import type { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../config/reactQueryConfig';
/* import { ReactQueryDevtools } from '@tanstack/react-query-devtools' */

const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {/*   <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
    )
}
export default ReactQueryProvider
