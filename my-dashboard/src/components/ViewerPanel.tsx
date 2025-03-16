import React from "react";
import "../styles/ViewerPanel.css";

const ViewerPanel: React.FC = () => {
  return (
    <div className="viewer-panel">
      <h2>Viewer Panel</h2>
      <p>Welcome! You have read-only access.</p>
    </div>
  );
};

export default ViewerPanel;