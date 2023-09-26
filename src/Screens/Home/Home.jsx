import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import FileInput from "../../components/FileInput/FileInput";

const Home = () => {
  const docs = [
    {
      uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
      fileType: "docx",
      fileName: "demo.docx",
    }, // Local File
  ];
  return (
    // <DocViewer
    //   documents={docs}
    //   pluginRenderers={DocViewerRenderers}
    //   style={{ height: 1000 }}
    // />
    <div>
      <FileInput />
    </div>
  );
};

export default Home;
