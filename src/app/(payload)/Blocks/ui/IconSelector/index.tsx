'use client';
import { SelectInput } from '@payloadcms/ui/fields/Select';
import { useField } from '@payloadcms/ui/forms/useField';
import { Option } from 'payload/types';
import React from 'react';
import * as FontAwesomeIcons from 'react-icons/fa6';
import { IconType } from 'react-icons/lib';

type Props = {
  path: string;
  label: string;
  required: boolean;
  description: () => any;
};

export const IconSelector: React.FC<Props> = ({ path, required }) => {
  const { value, setValue } = useField<string>({});

  const onChange = (option: Option) => {
    if (typeof option !== 'string') {
      setValue(option.value);
    }
  };

  const IconComponent = (FontAwesomeIcons as { [key: string]: IconType })?.[value];

  return (
    <>
      <SelectInput
        required={required}
        path={path}
        name={path}
        label="Icon"
        value={value}
        options={Object.keys(FontAwesomeIcons).map((value) => ({
          label: value,
          value,
        }))}
        onChange={onChange}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          gap: '5px',
          marginBottom: '5px',
        }}
      >
        Preview:
        {IconComponent ? <IconComponent style={{ width: 25, height: 25 }} /> : null}
      </div>
    </>
  );
};
