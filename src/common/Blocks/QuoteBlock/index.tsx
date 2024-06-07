import type { QuoteBlock as QuoteBlockType } from '@/payload-types';

const QuoteBlock = ({ data }: { data: QuoteBlockType }) => {
  return (
    <div className="container mx-auto bg-gray-300 px-4">
      <h1 className="text-3xl font-bold py-4">{data.quoteHeader}</h1>
      <p className="text-base leading-3 py-2 text-gray-700">{data.quoteText}</p>
    </div>
  );
};

export default QuoteBlock;
