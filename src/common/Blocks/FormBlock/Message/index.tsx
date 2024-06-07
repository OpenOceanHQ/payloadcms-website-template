import React from 'react';
import { Width } from '../Width';
import { convertLexicalToHTML } from '../convertLexicalToHtml';

export const Message: React.FC<{
  field: any;
}> = ({ field }) => {
  const serializedMessageHtml = convertLexicalToHTML(field.message.root);
  return (
    <Width className="mb-4" width={'100'}>
      {serializedMessageHtml && (
        <div dangerouslySetInnerHTML={{ __html: serializedMessageHtml }}></div>
      )}
    </Width>
  );
};
