import type { Access } from 'payload/types';

import { checkRole } from './checkRole';

export const adminsAndUsers: Access = ({ req: { user } }) => {
  if (user) {
    if (checkRole(['admin'], user)) {
      return true;
    }

    return {
      id: {
        equals: user.id,
      },
    };
  }

  return false;
};
