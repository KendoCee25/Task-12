import React from "react";
import "../styles/EditorPanel.css";

const EditorPanel: React.FC = () => {
  return (
    <div className="editor-panel">
      <h2>Editor Panel</h2>
      <textarea placeholder="Write your content here..."></textarea>
    </div>
  );
};

export default EditorPanel;