import React, { useState } from 'react';

function UploadMaterials({ user }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleUpload = (e) => {
    e.preventDefault();
    if (!user) {
      setMessage('You must be logged in to upload materials.');
      return;
    }
    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }
    // Fake upload process
    setMessage("File \"" + file.name + "\" uploaded successfully by " + user + ".");
    setFile(null);
  };
  return (
    <div style={{ padding: 20 }}>
      <h2>Upload Materials</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit" style={{ marginLeft: 10 }}>Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UploadMaterials;
