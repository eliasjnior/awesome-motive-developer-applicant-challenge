import { useBlockProps } from '@wordpress/block-editor'

import withReactQuery from '../../ui/hocs/with-react-query'
import { compose } from 'recompose'
import Button from '../../ui/components/Button'
import { type BlockEditProps } from '@wordpress/blocks'
import getTableDataService, {
  type TableData as ITableData
} from '../../ui/services/get-table-data'
import PublicTableData from '../../ui/components/PublicTableData'
import { useQuery } from 'react-query'

import './editor.scss'

const Edit = ({
  isSelected,
  setAttributes,
  attributes
}: BlockEditProps<{
  hiddenColumns?: string[]
  data?: ITableData
}>) => {
  const onChangeHiddenColumns: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const selectedOptions = []

    for (const option of event.target.selectedOptions) {
      selectedOptions.push(option.value)
    }

    setAttributes({
      hiddenColumns: selectedOptions
    })
  }

  const { isFetching, isLoading, isError, refetch } = useQuery(
    'getTableData',
    getTableDataService,
    {
      initialData: attributes.data,
      onSuccess: (data) => {
        setAttributes({
          data
        })
      }
    }
  )

  const onRefresh = () => {
    refetch()
  }

  const onResetHiddenColumns = () => {
    setAttributes({
      hiddenColumns: []
    })
  }

  if (isLoading) {
    return <p {...useBlockProps()}>Loading...</p>
  }

  if (!attributes.data || isError) {
    return <p {...useBlockProps()}>No data...</p>
  }

  return (
    <p {...useBlockProps()}>
      <PublicTableData
        data={attributes.data}
        hiddenColumns={attributes.hiddenColumns}
      />
      {isSelected && (
        <>
          <div>
            <p>Hidden columns</p>
            <select
              multiple
              onChange={onChangeHiddenColumns}
              style={{
                maxWidth: '100%',
                width: '100%'
              }}>
              {attributes.data?.data.headers.map((header) => {
                return (
                  <option
                    key={header}
                    value={header}
                    selected={attributes.hiddenColumns?.includes(header)}>
                    {header}
                  </option>
                )
              })}
            </select>
            <Button onClick={onResetHiddenColumns}>Reset hidden columns</Button>
          </div>
          <Button onClick={onRefresh}>Refresh data</Button>
          {isFetching && <p>Refreshing...</p>}
        </>
      )}
    </p>
  )
}

export default compose(withReactQuery)(Edit as any)
