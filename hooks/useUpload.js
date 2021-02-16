import { useRef, useState, PureComponent, useEffect } from "react";

export function useUpload() {
  const [uploadState, setUploadState] = useState(null);
  const [uploadPath, setUploadPath] = useState(null);
  return {
    upload: async (testInput, templateInput, additionalFields) => {
      setUploadState("loading");

      // append the files
      const formData = new FormData();
      formData.append("testFile", testInput.current.files[0]);
      formData.append("templateFile", templateInput.current.files[0]);

      // add additional form information
      for (const [key, value] of Object.entries(additionalFields)) {
        formData.append(key, value);
      }

      console.log("sending", Array.from(formData.entries()));

      setTimeout(() => {
        setUploadState("successful");
        setUploadPath("uploads/upload_2c8b87124350bd17ff22c42cf03b1260.py");
      }, 1500);

      // fetch it!
      /*
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        setUploadState(null);
        return;
      }

      const json = await response.json();
      setUploadPath(json.files.file.path);
      setUploadState("successful");
      */
    },
    uploadState,
    uploadPath,
  };
}
