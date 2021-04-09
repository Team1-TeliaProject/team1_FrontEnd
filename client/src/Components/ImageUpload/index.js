import React, { useState } from 'react';

import './ImageUpload.scss';

const ImageUpload = (setImage) => {
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'preset1');
    setLoading(true);
    const res = await fetch('https://api.cloudinary.com/v1_1/chiranjibi/image/upload', {
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
