import { __ } from '@wordpress/i18n'
import { useBlockProps } from '@wordpress/block-editor'

import TableData, { TableDataHandler } from '../../ui/components/TableData'
import withReactQuery from '../../ui/hocs/with-react-query'
import { compose } from 'recompose'
import { useRef } from 'react'
import Button from '../../ui/components/Button'
import { BlockEditProps } from '@wordpress/blocks'
import produce from 'immer'
import pull from 'lodash/pull'

import './editor.scss'

const Edit = ({
  setAttributes,
  attributes
}: BlockEditProps<{
  hiddenColumns?: Array<string>
}>) => {
  const tableDataRef = useRef<TableDataHandler>(null)

  const onRefresh = () => {
    tableDataRef.current?.refreshData()
  }

  const onChangeHiddenColumns = (value: string, checked: boolean) => {
    const hiddenColumns = produce(attributes.hiddenColumns || [], (draft) => {
      if (checked) {
        draft.push(value)
      } else {
        pull(draft, value)
      }
    })

    setAttributes({
      hiddenColumns
    })
  }

  return (
    <p {...useBlockProps()}>
      <Button onClick={onRefresh}>Refresh data</Button>
      <TableData
        ref={tableDataRef}
        hiddenColumns={attributes.hiddenColumns}
        onChangeHiddenColumns={onChangeHiddenColumns}
        isHeaderEditable
      />
    </p>
  )
}

export default compose(withReactQuery)(Edit)
