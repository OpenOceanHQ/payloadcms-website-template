import React from 'react';
import { Width } from '../Width';
import { convertLexicalToHTML } from '../convertLexicalToHtml';

export const Message: React.FC<{
  field: any;
}> = ({ field }) => {
  const serializedMessageHtml = convertLexicalToHTML(field.message.root);
  return (
    <Width
      className="mb-4 px-4 max-w-full prose lg:prose-lg xl:prose-xl prose-headings:text-inherit"
      width={'100'}
    >
      {serializedMessageHtml && (
        <div dangerouslySetInnerHTML={{ __html: serializedMessageHtml }}></div>
      )}
    </Width>
  );
};
