import { AccessArgs } from 'payload';
import { checkRole } from './checkRole';

type isAdmin = (args: AccessArgs) => boolean;

export const admins: isAdmin = ({ req: { user } }) => {
  return user !== null && checkRole(['admin'], user);
};
