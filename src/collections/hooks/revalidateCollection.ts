import { revalidatePath } from 'next/cache';
import { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload';

export const revalidateUpdatedCollection: CollectionAfterChangeHook = ({ collection, doc }) => {
  revalidatePath(`/${collection.slug}`);
  return doc;
};

export const revalidateDeletedCollection: CollectionAfterDeleteHook = ({ collection, doc }) => {
  revalidatePath(`/${collection.slug}`);
  return doc;
};
