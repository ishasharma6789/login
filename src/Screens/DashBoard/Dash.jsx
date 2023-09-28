import React from "react";
import "./Dash.css";
import FileCard from "../../components/FileCard/FileCard";
import { getAllFiles } from "../../Features/File/FileActions";
import { useDispatch, useSelector } from "react-redux";

const Dash = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllFiles({ email: "test" }));
  }, [dispatch]);

  const files = useSelector((state) => state.allFiles.files);
  const user = useSelector((state) => state.auth.user);
  console.log(files);
  return (
    <div>
      <div className="dash__heading">
        <h1>Dashboard</h1>
      </div>
      <div className="welcome__heading">
        <h2>Welcome {user.displayName}</h2>
      </div>
      <div>
        <div className="file__number">
          <h2>Number of Files created</h2>
          <p>{files.length}</p>
        </div>
      </div>
      <div className="files">
        <h2>Files</h2>
        <div className="files__container">
          {files.map(({ file, filename, createdAt }) => (
            <FileCard name={filename} date={createdAt} key={file._id} file={file} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dash;
