import path from 'path'
import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../../media'),
    // I think will be nice to save all the images of a store in its own folder. thinking {storeId}/store_logo.png
  },
  admin: {
    hideAPIURL: true,
  },

  fields: [
    // TODO: SEO here?
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description:
          'Provide descriptive text for images to improve accessibility. This ensures that visually impaired users can understand the content of the image.',
      },
    },
  ],
}
