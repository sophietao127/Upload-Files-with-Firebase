import './App.css';
import { useState } from "react";
import { storage } from "./firebase"

function App() {
  const [imageUpload, setImageUpload] = useState(null);

  const uploadImage = () => {
    if (imageUpload == null) return;

  };

  return (
    <div className="App">
      <input type='file' onChange={(event) => {setImageUpload(event.target.files[0])}}/>
      <button onClick={uploadImage}>Upload image</button>
    </div>
  );
}

export default App;
