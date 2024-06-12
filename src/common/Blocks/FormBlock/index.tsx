'use client';
import type { Form, FormBlock as FormBlockType } from '@/payload-types';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Text } from './Text';
import { Checkbox } from './Checkbox';
import { submitForm } from './submitForm';
import { TextArea } from './TextArea';
import { Number } from './Number';
import { Select } from './Select';
import { Email } from './Email';
import { Country } from './Country';
import { Message } from './Message';
import { convertLexicalToHTML } from './convertLexicalToHtml';

type formValues = {
  username: string;
};

const FormBlock = ({ data }: { data: FormBlockType }) => {
  // form from props
  const form = data.form;
  const { id: formID, confirmationType, redirect, confirmationMessage } = form as Form;

  const { enableIntro, introContent, intro_content_html } = data;

  // hook form controls
  const { register, handleSubmit, formState } = useForm<formValues>();
  const { errors } = formState;

  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ status?: string; message: string } | undefined>();

  if (typeof form === 'string') {
    return null;
  }

  const submitHandler = (data: formValues) => {
    // format the user data
    const dataToSend = Object.entries(data).map(([name, value]) => ({
      field: name,
      value,
    }));
    setError(undefined);
    setIsLoading(true);

    submitForm(formID, dataToSend, confirmationType, redirect)
      .then((error) => {
        setIsLoading(false);
        if (error) {
          setError(error);
        } else {
          setHasSubmitted(true);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  // render fields by blockType
  const renderField = (field: NonNullable<typeof form.fields>[number], index: number) => {
    switch (field.blockType) {
      case 'text':
        return <Text field={field} register={register} errors={errors} key={index} />;
      case 'textarea':
        return <TextArea field={field} register={register} errors={errors} key={index} />;
      case 'number':
        return <Number field={field} register={register} errors={errors} key={index} />;
      case 'checkbox':
        return <Checkbox field={field} register={register} errors={errors} key={index} />;
      case 'select':
        return <Select field={field} register={register} errors={errors} key={index} />;
      case 'email':
        return <Email field={field} register={register} errors={errors} key={index} />;
      case 'country':
        return <Country field={field} register={register} errors={errors} key={index} />;
      case 'message':
        return <Message field={field} key={index} />;
      default:
        return null;
    }
  };

  const confirmationMessageHtml =
    confirmationMessage?.root && convertLexicalToHTML({ ...confirmationMessage.root, format: 0 });

  return (
    <div className="container mx-auto py-4 bg-white px-4">
      {enableIntro && introContent && !hasSubmitted && intro_content_html && (
        <div
          className={`mt-4 mb-4 flex leading-relaxed text-gray-700 prose lg:prose-lg xl:prose-xl prose-headings:text-inherit`}
          dangerouslySetInnerHTML={{ __html: intro_content_html }}
        />
      )}
      {!isLoading && hasSubmitted && confirmationType === 'message' && confirmationMessageHtml && (
        <div
          className={`mt-4 mb-4 flex leading-relaxed text-gray-700 prose lg:prose-lg xl:prose-xl prose-headings:text-inherit`}
          dangerouslySetInnerHTML={{ __html: confirmationMessageHtml }}
        />
      )}
      {isLoading && !hasSubmitted && <p>Loading, please wait...</p>}
      {error && <div>{`${error.status || '500'}: ${error.message || ''}`}</div>}
      {!hasSubmitted && (
        <form id={formID} onSubmit={handleSubmit(submitHandler)} className="flex flex-col">
          <div className="sm:flex sm:flex-wrap gap-x-2 ml-[-0.5*var(--base)] mr-[-0.5*var(--base)] w-[calc(100% + var(--base))]">
            {/* render fields based on blockType */}
            {form.fields && form.fields.map((field, index: number) => renderField(field, index))}
          </div>
          <div className="w-full">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              form={formID}
            >
              {form.submitButtonLabel}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormBlock;
