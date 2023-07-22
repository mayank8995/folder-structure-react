import * as React from 'react';
import Folder from './Folder';
import explorer from './data/file';
import './style.css';

export default function App() {
  return (
    <div>
      <Folder explorer={explorer} />
    </div>
  );
}
