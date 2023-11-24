
import React, { useState } from 'react';
import { IoIosDocument, IoIosImages } from 'react-icons/io';
import './UploadImg.css';
import ImageFilters from './ImageFilters';
import ColorManipulation from './ColorManipulation';
import ContrastBrightnessAdjustments from './ContrastBrightnessAdjustments';
import CroppingResizing from './CroppingResizing';
import RotatingFlipping from './RotatingFlipping';
//import ImageDownloadButton from './ImageDownloadButton';

const UploadImg = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [buttonColor, setButtonColor] = useState('#8c8cea'); // Initial color for upload button
  const [uploadProgress, setUploadProgress] = useState(0);

  const fileIcons = {
    pdf: <IoIosDocument />,
    jpg: <IoIosImages />,
    // Add more file types and icons as needed
  };

  const handleFileChange = (event) => {
    handleFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleFile = (file) => {
    setSelectedFile(file);
    setIsFileUploaded(false); // Reset upload status
    setButtonColor('#3498db'); // Change to the original color
    setUploadProgress(0); // Reset progress
  };

  const getFileTypeIcon = () => {
    const fileExtension = (selectedFile?.name || '').split('.').pop().toLowerCase();
    const fileTypeIcon = fileIcons[fileExtension] || <IoIosDocument />;
    return fileTypeIcon;
  };

  const handleUpload = () => { 
    console.log("first : ",selectedFile);
    if (selectedFile) {
      console.log(`Uploading file: ${selectedFile.name}`);
      console.log(selectedFile);

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          const newProgress = prevProgress + 30;
          if (newProgress === 120) {
            clearInterval(interval);
            setIsFileUploaded(true);
          }
          return newProgress;
        });
      }, 500);

      // Perform file upload logic (replace this with actual upload logic)

      // Reset state after upload is complete
      //s
      //setSelectedFile(null);
      //console.log("last part",selectedFile);
      setButtonColor('#8c8cea'); // Reset button color after upload
    } else {
      console.error('No file selected for Upload');
    }
  };

  

  const handleDownload = () => {
    // Simulate file download
    console.log("HandleDownload : ",selectedFile);
    if (selectedFile) {
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(selectedFile);
      downloadLink.download = selectedFile.name;
      document.body.appendChild(downloadLink);
  
      // Trigger a click on the link
      downloadLink.click();
  
      // Clean up
      URL.revokeObjectURL(selectedFile);
    }
  };

  const handleImageProcessing = (processingFunction) => {
    if (selectedFile) {
      // Perform image processing logic
      processingFunction(selectedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="UploadImg"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h1 className="heading">File Upload App</h1>
      <label className="custom-file-input">
        <input
          type="file"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <div>Choose a File or Drag and Drop Here</div>
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
        style={{ background: '#e27a7a' }}
      >
        Download File
      </button>
      {selectedFile && (
        <div className="uploaded-file">
          {getFileTypeIcon()}
          <span>{selectedFile.name}</span>
        </div>
      )}
      {uploadProgress > 0 && uploadProgress < 100 && (
        <progress value={uploadProgress} max="100">
          {uploadProgress}%
        </progress>
      )}

      {/* Buttons for Image Processing Features */}
      <div className="processing-buttons">
        <button onClick={() => handleImageProcessing(ImageFilters)}>
          Apply Filters
        </button>
        <button onClick={() => handleImageProcessing(ColorManipulation)}>
          Color Manipulation
        </button>
        <button onClick={() => handleImageProcessing(ContrastBrightnessAdjustments)}>
          Contrast/Brightness
        </button>
        <button onClick={() => handleImageProcessing(CroppingResizing)}>
          Crop/Resize
        </button>
        <button onClick={() => handleImageProcessing(RotatingFlipping)}>
          Rotate/Flip
        </button>
      </div>

      {/* Display processed images */}
      {isFileUploaded && (
        <>
          <ImageFilters originalImage={selectedFile} />
          <ColorManipulation originalImage={selectedFile} />
          <ContrastBrightnessAdjustments originalImage={selectedFile} />
          <CroppingResizing originalImage={selectedFile} />
          <RotatingFlipping originalImage={selectedFile} />
          {/* <ImageDownloadButton originalImage={selectedFile} /> */}
        </>
      )}
    </div>
  );
};

export default UploadImg;
