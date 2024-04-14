```js
import axios from "axios";
import { useState } from "react";
function App() {
  const [image, setImage] = (useState < File) | (null > null);
  const SubmitImage = async () => {
    const dataUpload = new FormData();
    if (image) {
      dataUpload.append("file", image);
    }
    // upload_preset => "unsigned"
    // in settings/upload set it to unsigned
    dataUpload.append("upload_preset", "ml_default");

    try {
      // url =>https://api.cloudinary.com/v1_1/cloud_name/image/upload
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dqldwnp13/image/upload",
        dataUpload,
      );
      console.log(response?.data?.url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
          }
        }}
        className="px-4 py-2 rounded-md"
      />
      <button
        onClick={SubmitImage}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-800 rounded-md"
      >
        Upload
      </button>
    </>
  );
}

export default App;
```
