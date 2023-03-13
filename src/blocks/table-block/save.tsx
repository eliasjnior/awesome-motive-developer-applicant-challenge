import { __ } from '@wordpress/i18n'
import { useBlockProps } from '@wordpress/block-editor'

const Save = (props) => {
  console.log('props', props)
  return <p {...useBlockProps.save()}>Hello World</p>
}

export default Save
