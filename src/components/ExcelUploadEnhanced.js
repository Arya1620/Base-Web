import React, { useState } from 'react';
import { FaFileExcel, FaUpload } from 'react-icons/fa';
import './ExcelUploadEnhanced.css'; 

const ExcelUploadEnhanced = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    } else {
      setFile(null); 
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }
    alert(`File "${file.name}" uploaded successfully!`);

    setFile(null);
    document.getElementById('excel-file-enhanced').value = ''; 
  };

  return (
    <form className="upload-container" onSubmit={handleSubmit}>
      <div className="upload-box" onClick={() => document.getElementById('excel-file-enhanced').click()}>
        <FaFileExcel size={50} color="#28a745" />
        <p>Drop your excel or browse</p>
        <input
          type="file"
          id="excel-file-enhanced"
          className="file-input"
          accept=".xls,.xlsx"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
      {}
      {file && <p className="file-name">{file.name}</p>}
      {}
      <button type="submit" className="upload-button" disabled={!file}>
        <FaUpload /> Upload
      </button>
    </form>
  );
};

export default ExcelUploadEnhanced;
