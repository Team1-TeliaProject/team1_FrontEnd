import React, { useState } from 'react';

import './ImageUpload.scss';

const ImageUpload = ({ setImage }) => {
  const [setLoading] = useState(false);
  // eslint-disable-next-line no-undef
  const api = process.env.REACT_APP_CLOUDINARY;
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'preset1');
    setLoading(true);
    const res = await fetch(api, {
      method: 'POST',
      body: data
    });
    const file = await res.json();
    setImage(file.secure_url);
  };

  return (
    <input
      className="image-upload"
      onChange={uploadImage}
      name="file"
      placeholder="Upload an image"
      type="file"
    />
  );
};

export default ImageUpload;
