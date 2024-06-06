'use client';
import type { FormBlock as FormBlockType } from '@/payload-types';
import { useForm } from 'react-hook-form';

const FormBlock = ({ data }: { data: FormBlockType }) => {
  const { register } = useForm();

  const form = data.form;
  if (typeof form === 'string') {
    return null;
  }
  const renderField = (field: NonNullable<typeof form.fields>[number], index: number) => {
    switch (field.blockType) {
      case 'text':
        return (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">{field.label}</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              defaultValue={field.defaultValue ? field.defaultValue : ''}
              {...register(field.name)}
            />
          </div>
        );
      // Add more cases for different field types
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto bg-gray-300 px-4">
      <form>
        {form.fields && form.fields.map((field, index: number) => renderField(field, index))}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {form.submitButtonLabel}
        </button>
      </form>
    </div>
  );
};

export default FormBlock;
