import { __ } from '@wordpress/i18n'
import { useBlockProps } from '@wordpress/block-editor'

import './editor.scss'

const Edit = () => {
  return (
    <p {...useBlockProps()}>
      {__('Awesome Motive', 'developer-applicant-challenge')}
    </p>
  )
}

export default Edit
