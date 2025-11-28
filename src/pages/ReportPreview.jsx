import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stepper from '../components/Stepper';
import './ReportPreview.scss';

const ReportPreview = () => {
  const navigate = useNavigate();
  const [showViewReport, setShowViewReport] = useState(false);

  const detectedChanges = [
    'ADD ITEM H001 [STYLE NO. RES-10K] (QTY = 4 PCS)',
    'DELETE COMPONENT H005 [STYLE NO. CAP-100NF] (QTY = 2 PCS)',
    'CHANGE ITEM H003 FROM [STYLE NO. IC-CTRL-V1] (QTY = 12.5 SQ. INCHES) TO [STYLE NO. IC-CTRL-V2] (QTY = 25.0 SQ. INCHES)',
    'ITEM H002 MATERIAL DESCRIPTION WAS [ALUMINUM 6061-T6]',
    'ITEM H004 FINISH WAS [GALVANIZED]',
    'ITEM H006 WEIGHT WAS [2.5 LBS]'
  ];

  return (
    <div className="screen-card">
      <div className="screen-header">
        <div className="screen-number">3</div>
        <div className="screen-title">
          <h2>DCR Report Preview</h2>
          <p>Comprehensive change report</p>
        </div>
      </div>

      <div className="screen-body">
        <Stepper currentStep={3} />

        <div className="report-summary-card">
          <h3>📋 Report Summary</h3>
          <p>Complete analysis report with all detected changes, visual comparisons</p>
        </div>

        <div className="report-section">
          <h4>📝 Description</h4>
          <p>Update BOM quantities for resistor H001 and capacitor H005</p>
        </div>

        <div className="report-section">
          <h4>💡 Reason for Change</h4>
          <p>Material cost optimization and supplier change</p>
        </div>

        <div className="report-section">
          <h4>🔧 Modifications Made</h4>
          <p>Changed RES-10K qty from 2 to 4 PCS, Removed CAP-100NF</p>
        </div>

        <div className="report-section detected-changes-section">
          <h4>📊 Detected Changes</h4>
          <div className="changes-preview">
            <div className="overlay-preview">
              <span className="overlay-icon">✨</span>
              <strong>Overlay with Diff Highlighted</strong>
              <div className="overlay-placeholder">[Engineering Drawing with Highlighted Changes]</div>
            </div>
            <div className="changes-list-preview">
              {detectedChanges.map((change, index) => (
                <div key={index} className="change-item-preview">{change}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="approval-section">
          <div className="approval-field">
            <label>Drawn By</label>
            <div className="approval-value">JSH</div>
          </div>
          <div className="approval-field">
            <label>Checked By</label>
            <div className="approval-value">SJN</div>
          </div>
          <div className="approval-field">
            <label>Approved By</label>
            <div className="approval-value">–</div>
          </div>
        </div>

        <div className="action-buttons-report">
          <button className="btn btn-outline" onClick={() => navigate('/comparison')}>
            Back to Dashboard
          </button>
          <button className="btn btn-secondary" onClick={() => setShowViewReport(true)}>
            📥 Download Report
          </button>
          <button className="btn btn-primary">
            Complete SYSPRO Integration
          </button>
        </div>

        {showViewReport && (
          <div className="view-report-modal">
            <div className="modal-content-report">
              <div className="modal-header-report">
                <h3>📄 View Report</h3>
                <button className="btn-close" onClick={() => setShowViewReport(false)}>✕</button>
              </div>

              <div className="dcr-details-box">
                <h4>📋 DCR Details</h4>
                <div className="detail-row">
                  <strong>DCR ID:</strong> DCR-251121-04
                </div>
                <div className="detail-row">
                  <strong>Date:</strong> 2025-11-21 15:32
                </div>
              </div>

              <div className="report-field">
                <h4>📝 Description</h4>
                <p>Update BOM quantities for resistor H001 and capacitor H005</p>
              </div>

              <div className="report-field">
                <h4>💡 Reason for Change</h4>
                <p>Material cost optimization and supplier change</p>
              </div>

              <div className="report-field">
                <h4>🔧 Modifications Made</h4>
                <p>Changed RES-10K qty from 2 to 4 PCS, Removed CAP-100NF</p>
              </div>

              <div className="report-field">
                <h4>📊 Diff Report</h4>
                <div className="diff-section">
                  <strong className="diff-title">✨ Overlay with Diff Highlighted</strong>
                  <div className="diff-image-placeholder">[Engineering Drawing Preview]</div>
                </div>

                <div className="changes-list-modal">
                  {detectedChanges.map((change, index) => (
                    <div key={index} className="change-item-modal">{change}</div>
                  ))}
                </div>
              </div>

              <div className="approval-grid">
                <div className="approval-box">
                  <label>Drawn By</label>
                  <div className="approval-initials">JSH</div>
                </div>
                <div className="approval-box">
                  <label>Approved By</label>
                  <div className="approval-initials">SJN</div>
                </div>
                <div className="approval-box">
                  <label>Checked By</label>
                  <div className="approval-initials">MCN</div>
                </div>
              </div>

              <button className="btn btn-primary download-btn">
                📥 Download Complete Report
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportPreview;
