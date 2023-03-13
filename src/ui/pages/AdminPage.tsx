import { useRef } from 'react'
import Button from '../components/Button'
import { compose } from 'recompose'
import withReactQuery from '../hocs/with-react-query'
import TableData, { type TableDataHandler } from '../components/TableData'

const AdminPage = () => {
  const tableDataRef = useRef<TableDataHandler>(null)

  const onRefresh = () => {
    tableDataRef.current?.refreshData()
  }

  return (
    <>
      <h1 className="wp-heading-inline">
        Awesome Motive - Developer Applicant Challenge
      </h1>
      <Button onClick={onRefresh}>Refresh data</Button>
      <TableData ref={tableDataRef} />
    </>
  )
}

export default compose(withReactQuery)(AdminPage)
