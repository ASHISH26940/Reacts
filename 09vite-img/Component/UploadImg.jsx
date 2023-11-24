// src/UploadImg.jsx

import React, { useState } from 'react';
import { IoIosDocument,IoIosImages } from 'react-icons/io';
import './UploadImg.css';

const UploadImg = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [buttonColor, setButtonColor] = useState('#8c8cea'); // Initial color for upload button

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFileUploaded(false); // Reset upload status
    setButtonColor('#3498db'); // Change to the original color
  };

  const getFileTypeIcon = () => {
    const fileExtension = (selectedFile?.name || '').split('.').pop().toLowerCase();
    const fileIcons = {
      pdf: <IoIosDocument />,
      jpg: <IoIosImages/>
      // Add more file types and icons as needed
    };
    console.log(fileExtension);
    return fileIcons[fileExtension]||<IoIosDocument/>
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log(`Uploading file: ${selectedFile.name}`);
      console.log(selectedFile);

      // Perform file upload logic

      //setSelectedFile(null);
      setIsFileUploaded(true); // Set upload status
      setButtonColor('#8c8cea'); // Reset button color after upload
    } else {
      console.error('No file selected for Upload');
    }
  };

  const handleDownload = () => {
    // Simulate file download
    if (selectedFile) {
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(selectedFile);
      downloadLink.download = selectedFile.name;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className="UploadImg">
      <h1 className="heading">File Upload App</h1>
      <label className="custom-file-input">
        Choose a File
        <input type="file" onChange={handleFileChange} />
      </label>
      <button
        className="upload-button"
        style={{ background: buttonColor }}
        onClick={handleUpload}
        disabled={!selectedFile || isFileUploaded}
      >
        Upload File
      </button>
      <button
        className="download-button"
        onClick={handleDownload}
        disabled={!isFileUploaded}
        style={{ background: '#e27a7a' }} // Set the original color for the download button
      >
        Download File
      </button>
      {selectedFile && (
        <div className="uploaded-file">
          {getFileTypeIcon()}
          <span>{selectedFile.name}</span>
        </div>
      )}
    </div>
  );
};

export default UploadImg;
