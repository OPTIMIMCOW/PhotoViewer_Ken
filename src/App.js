import logo from './logo.svg';
import styles from './App.css';
import { PhotoViewer } from './photoViewer/PhotoViewer';
import React from 'react';

const idNumbers = [1001, 1002, 1003, 1004, 1005, 1006];
const urls = [];
for(let i=0; i<idNumbers.length;i++){
  urls.push(`https://picsum.photos/id/${idNumbers[i]}/1600/900.jpg`)
}


function App() {
  return (
    <div>
      <h1 style={{ color: "red" }}>React Photo Viewer</h1>
      <PhotoViewer src={urls} />
    </div>
  );
}

export default App;

