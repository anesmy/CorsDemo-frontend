import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadFiles from "./components/upload-files.component";

function App() {
  return (
    <div className="container" style={{ width: "600px" }}>
      <div style={{ margin: "20px" }}>
        <h4>React upload Files</h4>
      </div>

      <UploadFiles />
    </div>
  );
}

export default App;