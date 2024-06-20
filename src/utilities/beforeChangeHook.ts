import { CollectionBeforeChangeHook } from 'payload/types';
import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

export const beforeChangeHook: CollectionBeforeChangeHook = async ({ data, req }) => {
  try {
    const s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });

    const fileName = req.file?.name;
    const randomString = uuidv4();
    const fileExtension = fileName?.split('.').pop();
    const newFileName = fileExtension ? `${randomString}.${fileExtension}` : randomString;

    const uploadParams = {
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: newFileName,
      Body: req.file?.data,
      ContentType: req.file?.mimetype,
    };

    const d = await s3.upload(uploadParams).promise();

    return { ...data, url: d.Location };
  } catch (e) {
    return data;
  }
};
