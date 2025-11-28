import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stepper from '../components/Stepper';
import './UploadDrawings.scss';

const UploadDrawings = () => {
  const navigate = useNavigate();
  const [oldFile, setOldFile] = useState(null);
  const [newFile, setNewFile] = useState(null);

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (type === 'old') {
      setOldFile(file);
    } else {
      setNewFile(file);
    }
  };

  const handleContinue = () => {
    if (oldFile && newFile) {
      navigate('/comparison');
    }
  };

  return (
    <div className="screen-card">
      <div className="screen-header">
        <div className="screen-number">1</div>
        <div className="screen-title">
          <h2>Upload Drawings</h2>
          <p>Upload OLD and NEW drawings for DCR Generation</p>
        </div>
      </div>

      <div className="screen-body">
        <Stepper currentStep={1} />

        <h3 className="section-title">Upload Drawing Files</h3>

        <div className="upload-grid">
          <div className="upload-section">
            <label className="upload-label">📄 OLD Drawing (PDF)</label>
            <div className="upload-zone">
              <div className="upload-icon">📤</div>
              <h4>Drag and drop file here</h4>
              <p className="upload-limit">Limit 200MB per file · PDF</p>
              <label className="btn btn-outline" htmlFor="old-file">
                Browse Files
              </label>
              <input 
                type="file" 
                id="old-file" 
                accept=".pdf"
                style={{ display: 'none' }}
                onChange={(e) => handleFileChange(e, 'old')}
              />
              {oldFile && (
                <div className="file-selected">
                  ✓ {oldFile.name}
                </div>
              )}
            </div>
          </div>

          <div className="upload-section">
            <label className="upload-label">📄 NEW Drawing (PDF)</label>
            <div className="upload-zone">
              <div className="upload-icon">📤</div>
              <h4>Drag and drop file here</h4>
              <p className="upload-limit">Limit 200MB per file · PDF</p>
              <label className="btn btn-outline" htmlFor="new-file">
                Browse Files
              </label>
              <input 
                type="file" 
                id="new-file" 
                accept=".pdf"
                style={{ display: 'none' }}
                onChange={(e) => handleFileChange(e, 'new')}
              />
              {newFile && (
                <div className="file-selected">
                  ✓ {newFile.name}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn btn-secondary" onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </button>
          <button 
            className="btn btn-primary" 
            onClick={handleContinue}
            disabled={!oldFile || !newFile}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadDrawings;
