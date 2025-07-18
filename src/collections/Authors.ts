import type { CollectionConfig } from 'payload'

export const Authors: CollectionConfig = {
  slug: 'authors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'lastName', 'bio'],
  },
  fields: [
    {
      name: 'name',
      label: 'Author Name',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
      required: false,
    },
  ],
  timestamps: true,
}
