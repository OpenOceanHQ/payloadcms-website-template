import link, { LinkAppearances } from './link';
import deepMerge from '../../../utilities/deepMerge';
import { ArrayField, Field } from 'payload';

type LinkGroupType = (options?: {
  overrides?: Partial<ArrayField>;
  appearances?: LinkAppearances[] | false;
}) => Field;

const linkGroup: LinkGroupType = ({ overrides = {}, appearances } = {}) => {
  const generatedLinkGroup: Field = {
    name: 'links',
    type: 'array',
    fields: [
      link({
        appearances,
      }),
    ],
  };

  return deepMerge(generatedLinkGroup, overrides);
};

export default linkGroup;
