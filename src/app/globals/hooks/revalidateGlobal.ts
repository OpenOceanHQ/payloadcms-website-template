import { revalidatePath } from 'next/cache';
import { GlobalAfterChangeHook } from 'payload/types';

const revalidateGlobal: GlobalAfterChangeHook = ({ doc }) => {
  revalidatePath('/', 'layout');
  return doc;
};

export default revalidateGlobal;
