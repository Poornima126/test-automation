import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.scss';

const Dashboard = () => {
  const navigate = useNavigate();

  const dcrHistory = [
    { id: 'DCR-251121-04', date: '2025-11-21 15:32', drawnBy: 'JSH', checkedBy: 'MCN', approvedBy: 'SJN' },
    { id: 'DCR-251121-03', date: '2025-11-21 14:15', drawnBy: 'EDS', checkedBy: '–', approvedBy: 'RBN' },
    { id: 'DCR-251121-02', date: '2025-11-21 12:45', drawnBy: 'DWN', checkedBy: 'LAN', approvedBy: 'SJN' },
    { id: 'DCR-251121-01', date: '2025-11-21 11:20', drawnBy: 'RSC', checkedBy: '–', approvedBy: '–' },
    { id: 'DCR-251120-04', date: '2025-11-20 13:55', drawnBy: 'MTR', checkedBy: 'MCN', approvedBy: 'RBN' }
  ];

  return (
    <div className="screen-card">
      <div className="screen-header">
        <div className="screen-number">📊</div>
        <div className="screen-title">
          <h2>DCR Dashboard</h2>
          <p>View and manage all comparisons</p>
        </div>
      </div>

      <div className="screen-body">
        <div className="dashboard-header">
          <h3>DCR History</h3>
          <button className="btn btn-primary">
            + New DCR
          </button>
        </div>

        <div className="table-container">
          <table className="dcr-table">
            <thead>
              <tr>
                <th>DCR ID</th>
                <th>Date</th>
                <th>Drawn By</th>
                <th>Checked By</th>
                <th>Approved By</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dcrHistory.map((dcr) => (
                <tr key={dcr.id}>
                  <td className="dcr-id">{dcr.id}</td>
                  <td>{dcr.date}</td>
                  <td>{dcr.drawnBy}</td>
                  <td>{dcr.checkedBy}</td>
                  <td>{dcr.approvedBy}</td>
                  <td>
                    <button className="btn-action">View Report</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <span>Showing 1 to 5 of 15 entries</span>
          <div className="pagination-controls">
            <button className="btn-page" disabled>← Previous</button>
            <button className="btn-page active">1</button>
            <button className="btn-page">2</button>
            <button className="btn-page">3</button>
            <button className="btn-page">Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
