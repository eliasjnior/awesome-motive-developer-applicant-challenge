import { type BlockSaveProps } from '@wordpress/blocks'
import { type TableData as ITableData } from '../../ui/services/get-table-data'
import PublicTableData from '../../ui/components/PublicTableData'

const Save = ({
  attributes
}: BlockSaveProps<{
  hiddenColumns?: string[]
  data?: ITableData
}>) => {
  if (attributes.data == null) {
    return <p>Admin needs to wait fetch the data on the backend.</p>
  }

  return (
    <PublicTableData
      data={attributes.data}
      hiddenColumns={attributes.hiddenColumns || []}></PublicTableData>
  )
}

export default Save
