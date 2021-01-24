import { useRef, useState, PureComponent } from "react";

export function useUpload() {
  const inputRef = useRef(null);
  const [uploadState, setUploadState] = useState(null);
  const [uploadPath, setUploadPath] = useState(null);
  return {
    upload: async () => {
      if (!inputRef.current) {
        console.error("missing input ref");
      }
      setUploadState("loading");
      const file = inputRef.current.files[0];
      const formData = new FormData();
      formData.append("file", file);

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
    },
    inputRef,
    uploadState,
    uploadPath,
  };
}
