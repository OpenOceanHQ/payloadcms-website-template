import { revalidatePath } from 'next/cache';
import { GlobalAfterChangeHook } from 'payload';

const revalidateGlobal: GlobalAfterChangeHook = ({ doc }) => {
  revalidatePath('/', 'layout');
  return doc;
};

export default revalidateGlobal;
