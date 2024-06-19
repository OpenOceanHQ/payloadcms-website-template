'use client';
import { SelectInput } from '@payloadcms/ui/fields/Select';
import { useField } from '@payloadcms/ui/forms/useField';
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
  const { value, setValue } = useField<string>({ path });

  const IconComponent = value
    ? (FontAwesomeIcons as { [key: string]: IconType })?.[value]
    : undefined;

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
        onChange={(value) => {
          if (typeof value === 'string') {
            setValue(value);
          }
        }}
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
