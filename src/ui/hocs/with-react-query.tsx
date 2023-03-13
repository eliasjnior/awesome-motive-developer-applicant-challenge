import { QueryClient, QueryClientProvider } from 'react-query'

import { type ReactHoc } from '../types/hocs'

const withReactQuery: ReactHoc = (Component: any) => (props) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...props} />
    </QueryClientProvider>
  )
}

export default withReactQuery
