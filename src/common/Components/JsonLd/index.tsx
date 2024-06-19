import { CollectionPageJsonLd } from 'next-seo';

type JsonLdSchemaType = {
  url: string;
  name: string;
  datePublished: string;
  dateModified: string;
};
const JsonLdSchema = (data: JsonLdSchemaType) => {
  return <CollectionPageJsonLd useAppDir={true} name={data.name} hasPart={[data]} />;
};

export default JsonLdSchema;
