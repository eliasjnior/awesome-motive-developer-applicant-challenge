import { forwardRef, useImperativeHandle } from 'react'
import { useQuery } from 'react-query'
import getTableDataService from '../services/get-table-data'
import map from 'lodash/map'
import format from 'date-fns/format'

export interface TableDataHandler {
  refreshData: () => void
}

const TableData = forwardRef((_, ref) => {
  const { isFetching, isLoading, data, isError, refetch } = useQuery(
    'getTableData',
    getTableDataService
  )

  useImperativeHandle(ref, () => ({
    refreshData: () => {
      refetch()
    }
  }))

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>There was an error loading the table.</p>
  }

  if (data == null) {
    return <p>The data is empty for unknown reason.</p>
  }

  return (
    <>
      <h2>{data.title}</h2>
      <table className="wp-list-table widefat fixed striped table-view-list posts">
        <thead>
          <tr>
            {data.data.headers.map((header, index) => (
              <th key={index} scope="col" id={header} className="manage-column">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {map(data.data.rows, (row, rowIndex) => (
            <tr key={rowIndex} id="post-5" className="hentry entry">
              <td className="column-primary">{row.id}</td>
              <td className="column-primary">{row.fname}</td>
              <td className="column-primary">{row.lname}</td>
              <td className="column-primary">{row.email}</td>
              <td className="column-primary">
                {format(row.date * 1000, 'MM/dd/yyyy')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isFetching && <p>Refreshing...</p>}
    </>
  )
})

export default TableData
