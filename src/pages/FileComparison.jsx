import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stepper from '../components/Stepper';
import './FileComparison.scss';

const FileComparison = () => {
  const navigate = useNavigate();
  const [showTextComparison, setShowTextComparison] = useState(false);
  const [showVisualComparison, setShowVisualComparison] = useState(false);

  const detectedChanges = [
    'ADD ITEM H001 [STYLE NO. RES-10K] (QTY = 4 PCS)',
    'ADD ITEM H007 [STYLE NO. LED-GRN] (QTY = 3 PCS)',
    'DELETE COMPONENT H005 [STYLE NO. CAP-100NF] (QTY = 2 PCS)',
    'CHANGE ITEM H003 FROM [STYLE NO. IC-CTRL-V1] (QTY = 12.5 SQ. INCHES) TO [STYLE NO. IC-CTRL-V2] (QTY = 25.0 SQ. INCHES)',
    'ITEM H002 MATERIAL DESCRIPTION WAS [ALUMINUM 6061-T6]',
    'ITEM H004 FINISH WAS [GALVANIZED]',
    'ITEM H006 WEIGHT WAS [2.5 LBS]'
  ];

  return (
    <div className="screen-card">
      <div className="screen-header">
        <div className="screen-number">2</div>
        <div className="screen-title">
          <h2>File Comparison</h2>
          <p>Compare and analyze drawing differences</p>
        </div>
      </div>

      <div className="screen-body">
        <Stepper currentStep={2} />

        <div className="success-banner">
          <span className="success-icon">📁</span>
          <h3>Files Uploaded Successfully</h3>
        </div>

        <div className="ready-status">
          <span className="check-icon">✓</span>
          <div>
            <h4>Ready for Analysis</h4>
            <p>Both drawing files have been uploaded and are ready for comparison.</p>
          </div>
        </div>

        <div className="files-info">
          <div className="file-card">
            <h4>📄 OLD Drawing</h4>
            <p className="file-name">drawing_old.pdf</p>
            <p className="file-meta">Size: 2.4 MB · Uploaded: Just now</p>
            <button className="btn-preview">👁 Preview PDF</button>
          </div>

          <div className="file-card">
            <h4>📄 NEW Drawing</h4>
            <p className="file-name">drawing_new.pdf</p>
            <p className="file-meta">Size: 2.6 MB · Uploaded: Just now</p>
            <button className="btn-preview">👁 Preview PDF</button>
          </div>
        </div>

        <div className="comparison-actions">
          <button 
            className="btn btn-primary comparison-btn"
            onClick={() => setShowTextComparison(!showTextComparison)}
          >
            📋 Compare Text (BOM/Notes)
          </button>
          <button 
            className="btn btn-primary comparison-btn"
            onClick={() => setShowVisualComparison(!showVisualComparison)}
          >
            🔍 Compare Diagrams (Vision)
          </button>
        </div>

        {showTextComparison && (
          <div className="comparison-modal">
            <div className="modal-header">
              <h3>📋 Text & BOM Comparison</h3>
              <button className="btn-close" onClick={() => setShowTextComparison(false)}>✕</button>
            </div>
            <div className="completion-status">
              <span className="check-icon">✓</span>
              <div>
                <strong>Text Extraction Complete</strong>
                <p>10 changes detected: 5 items added, 2 items removed, 3 quantities modified</p>
              </div>
            </div>
            <div className="changes-list">
              <h4>🔍 Detected Changes</h4>
              {detectedChanges.map((change, index) => (
                <div key={index} className="change-item">{change}</div>
              ))}
            </div>
            <button className="btn btn-primary" onClick={() => setShowTextComparison(false)}>
              Continue
            </button>
          </div>
        )}

        {showVisualComparison && (
          <div className="comparison-modal">
            <div className="modal-header">
              <h3>🔍 Visual Diagram Comparison</h3>
              <button className="btn-close" onClick={() => setShowVisualComparison(false)}>✕</button>
            </div>
            <div className="completion-status success">
              <span className="check-icon">✓</span>
              <strong>Vision Analysis Completed</strong>
            </div>
            <div className="visual-grid">
              <div className="visual-panel">
                <h4>📄 OLD Drawing</h4>
                <div className="image-placeholder">[Old Image Preview]</div>
              </div>
              <div className="visual-panel">
                <h4>📄 NEW Drawing</h4>
                <div className="image-placeholder">[New Image Preview]</div>
              </div>
              <div className="visual-panel">
                <h4>🔍 Diff Mask</h4>
                <div className="image-placeholder">[Diff Mask Image]</div>
              </div>
              <div className="visual-panel">
                <h4>✨ Overlay (Highlighted)</h4>
                <div className="image-placeholder">[Overlay with Changes]</div>
              </div>
            </div>
            <button className="btn btn-primary" onClick={() => setShowVisualComparison(false)}>
              Continue
            </button>
          </div>
        )}

        <div className="action-buttons">
          <button className="btn btn-secondary" onClick={() => navigate('/upload')}>
            ← Back
          </button>
          <button className="btn btn-primary" onClick={() => navigate('/report')}>
            Generate Report →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileComparison;
