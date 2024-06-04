import { CollectionAfterChangeHook } from 'payload/types';

export const loginAfterCreate: CollectionAfterChangeHook = async ({ doc, req, operation }) => {
  if (operation === 'create' && !req.user) {
    const { email, password } = req.data as { email: string; password: string };

    if (email && password) {
      const { user, token } = await req.payload.login({
        collection: 'users',
        data: { email, password },
        req,
      });

      return {
        ...doc,
        token,
        user,
      };
    }
  }

  return doc;
};
