import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";
export default function TextEditor() {
  const [data, setData] = useState("write here your content");
  console.log(data);
  return (
    <div>
      <ReactQuill
        theme="snow"
        value={data}
        onChange={setData}
        style={{ height: "200px", width: "100%", marginBottom: "50px" }}
      />
    </div>
  );
}
