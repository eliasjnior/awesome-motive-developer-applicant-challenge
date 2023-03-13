import format from 'date-fns/format'
import { type TableData } from '../services/get-table-data'
import map from 'lodash/map'

interface PublicTableDataProps {
  data: TableData
  hiddenColumns?: string[]
}

const PublicTableData = ({
  data,
  hiddenColumns = []
}: PublicTableDataProps) => {
  return (
    <table>
      <thead>
        <tr>
          {data.data.headers.map((header, index) => {
            if (hiddenColumns.includes(header)) {
              return null
            }

            return <th key={index}>{header}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {map(data.data.rows, (row, index) => {
          return (
            <tr key={index}>
              {!hiddenColumns.includes('ID') && (
                <td className="column-primary">{row.id}</td>
              )}
              {!hiddenColumns.includes('First Name') && (
                <td className="column-primary">{row.fname}</td>
              )}
              {!hiddenColumns.includes('Last Name') && (
                <td className="column-primary">{row.lname}</td>
              )}
              {!hiddenColumns.includes('Email') && (
                <td className="column-primary">{row.email}</td>
              )}
              {!hiddenColumns.includes('Date') && (
                <td className="column-primary">
                  {format(row.date * 1000, 'MM/dd/yyyy')}
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default PublicTableData
