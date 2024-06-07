import * as FontAwesomeIcons from 'react-icons/fa6';
import { IconType } from 'react-icons/lib';

export const CustomIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = (FontAwesomeIcons as { [key: string]: IconType })[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} />;
};
