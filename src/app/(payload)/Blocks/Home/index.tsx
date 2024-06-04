import { Block } from 'payload/types';

export const HomeBlock: Block = {
  slug: 'home-block',
  interfaceName: 'HomeBlock',
  fields: [
    {
      name: 'displayText',
      type: 'text',
      defaultValue: 'Home',
    },
  ],
};
