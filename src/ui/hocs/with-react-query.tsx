import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import {ReactHoc } from '../types/hocs'

const withReactQuery: ReactHoc = (Component: any) => (props) => {
  const queryClient = new QueryClient()

  return <QueryClientProvider client={queryClient}>
    <Component {...props} />
  </QueryClientProvider>
}

export default withReactQuery;