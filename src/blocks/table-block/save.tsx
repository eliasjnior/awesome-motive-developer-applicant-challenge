import { __ } from '@wordpress/i18n'
import { useBlockProps } from '@wordpress/block-editor'

const Save = () => {
  return (
    <p {...useBlockProps.save()}>
      {__('Awesome Motive', 'developer-applicant-challenge')}
    </p>
  )
}

export default Save
