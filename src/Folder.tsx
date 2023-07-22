import * as React from 'react';

const Folder = ({ explorer }) => {
  const [expanded, setExpanded] = React.useState(false);
  if (explorer.folderItems) {
    return (
      <>
        <div onClick={() => setExpanded(!expanded)}>
          {expanded ? '📂' : '📂'}
          {explorer.name}
        </div>
        <div
          style={{ paddingLeft: '15px', display: expanded ? 'block' : 'none' }}
        >
          {explorer.folderItems.map((item) => (
            <Folder explorer={item} />
          ))}
        </div>
      </>
    );
  } else {
    return <div>📄 {explorer.name}</div>;
  }
  return <></>;
};

export default Folder;
