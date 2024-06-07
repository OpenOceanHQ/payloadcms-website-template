import type { Form } from '@/payload-types';
import { redirect as routerRedirect } from 'next/navigation';

type ErrorResponse = {
  status?: string;
  message: string;
};

type SubmissionData = {
  field: string;
  value: string;
};

export const submitForm = async (
  formID: Form['id'],
  submissionData: SubmissionData[],
  confirmationType: Form['confirmationType'],
  redirect?: Form['redirect'],
): Promise<ErrorResponse | undefined> => {
  try {
    const req = await fetch(`/api/form-submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        form: formID,
        submissionData,
      }),
    });

    const res = await req.json();
    if (req.status >= 400) {
      return {
        status: res.status,
        message: res.errors?.[0]?.message || 'Internal Server Error',
      };
    }

    if (confirmationType === 'redirect' && redirect) {
      const { url } = redirect;

      if (url) routerRedirect(url);
    }

    return undefined;
  } catch (err) {
    return {
      message: 'Something went wrong.',
    };
  }
};
