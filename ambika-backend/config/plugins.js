module.exports = ({ env }) => {
  return {
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {
            folder: 'strapi-uploads',
            use_filename: true,
            unique_filename: true,
            overwrite: false,
            resource_type: 'auto',
          },
          uploadStream: {
            folder: 'strapi-uploads',
            use_filename: true,
            unique_filename: true,
            overwrite: false,
            resource_type: 'auto',
          },
          delete: {},
        },
      },
    },
  };
};
