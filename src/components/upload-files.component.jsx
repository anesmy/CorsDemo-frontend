import React, { Component } from "react";
import UploadService from "../services/upload-files.service";

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: undefined,
      currentFile: undefined,
      message: "",

      fileInfos: [],
    };
  }

  selectFile = (event) => {
    this.setState({
      selectedFile: event.target.value,
    });
  }

  upload = () => {
    let currentFile = this.state.selectedFile;

    this.setState({
      currentFile: currentFile,
    });

    UploadService.upload(currentFile)
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
      })
      .catch(() => {
        this.setState({
          message: "Could not upload the file!",
          currentFile: undefined,
        });
      });
      this.setState({
        selectedFile: undefined,
      });

  }

  render = () => {
    const {
      message,
    } = this.state;

    return (
      <div>

        <label className="btn btn-default">
          <input type="file" onChange={this.selectFile} />
        </label>

        <button className="btn btn-success"
          onClick={this.upload}
        >
          Upload
        </button>

        <div className="alert alert-light" role="alert">
          {message}
        </div>

      </div>
    );
  }
}
