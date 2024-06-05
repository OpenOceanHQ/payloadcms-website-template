import React from 'react';
import { useField } from '@payloadcms/ui/forms';
import * as FontAwesomeIcons from 'react-icons/fa6';
import { IconType } from 'react-icons/lib';

type Props = {
  path: string;
  label: string;
  required: boolean;
};

export const IconSelector: React.FC<Props> = ({ path, required }) => {
  const { value, setValue } = useField<string>({ path });

  const onChange = (value: any) => {
    console.log(value);
    setValue(value.value);
  };

  // const IconComponent = (FontAwesomeIcons as { [key: string]: IconType })?.[value];

  return (
    <div>aa</div>
    // <SelectInput
    //   required={required}
    //   path={path}
    //   name={path}
    //   label="Icon"
    //   value={value}
    //   options={Object.keys(FontAwesomeIcons).map((value) => ({
    //     label: value,
    //     value,
    //   }))}
    //   onChange={onChange}
    //   description={() => (
    //     <div
    //       style={{
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         gap: '5px',
    //       }}
    //     >
    //       Preview:
    //       {IconComponent ? <IconComponent style={{ width: 25, height: 25 }} /> : null}
    //     </div>
    //   )}
    // />
  );
};
