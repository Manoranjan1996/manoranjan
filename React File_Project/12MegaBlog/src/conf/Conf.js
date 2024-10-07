const conf = {
  appwrteUrl: String(import.meta.env.VITE_APPWRITER_URL),
  appwrteProjectId: String(import.meta.env.VITE_PROJECT_ID),
  appwrteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
  appwrteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
  appwrteBucketId: String(import.meta.env.VITE_BUCKET_ID),
};

export default conf;
