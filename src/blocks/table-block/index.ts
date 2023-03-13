import { registerBlockType } from '@wordpress/blocks'

import './style.scss'

import Edit from './edit'
import Save from './save'
import metadata from './block.json'

registerBlockType(metadata.name, {
  edit: Edit as any,
  save: Save as any,
  title: metadata.title,
  category: metadata.category,
  attributes: {
    data: {
      type: 'object'
    },
    hiddenColumns: {
      type: 'array',
      default: []
    }
  }
})
