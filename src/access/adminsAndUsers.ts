import type { AccessArgs, FieldAccess } from 'payload/types';
import { checkRole } from './checkRole';

type isAdminAndUser = (args: AccessArgs) => boolean;

export const adminsAndUsers: isAdminAndUser = ({ req: { user } }) => {
  if (user) {
    if (checkRole(['admin'], user) || checkRole(['user'], user)) {
      return true;
    }
  }

  return false;
};

export const adminsAndUsersFieldAccess: FieldAccess = ({ req: { user } }) => {
  if (user) {
    if (checkRole(['admin'], user) || checkRole(['user'], user)) {
      return true;
    }
  }

  return false;
};
