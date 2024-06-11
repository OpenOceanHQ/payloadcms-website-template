import React from 'react';
import { UseFormRegister, FieldValues, FieldErrorsImpl } from 'react-hook-form';
import { Width } from '../Width';

export const Select: React.FC<{
  field: any;
  register: UseFormRegister<FieldValues & any>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
}> = ({ field, register, errors }) => {
  return (
    <Width className="mb-4" width={field.width}>
      <label className="block text-gray-700 text-sm font-bold mb-2">{field.label}</label>
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-black"
        defaultValue={field.defaultValue ? field.defaultValue : ''}
        {...register(field.name, { required: field.required })}
      >
        {field.options.map((option: { label: string; value: any }) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {field.required && errors[field.name] && (
        <div className="text-red-600">This field is required</div>
      )}
    </Width>
  );
};
