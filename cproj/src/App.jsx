import { useState } from "react";
import Tesseract from "tesseract.js";
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function App() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Upload file to Firebase Storage
  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const storageRef = ref(storage, `uploads/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    processText(downloadURL);
  };

  // Process text from image
  const processText = async (imageUrl) => {
    Tesseract.recognize(imageUrl, "eng", {
      logger: (m) => console.log(m),
    }).then(({ data: { text } }) => {
      setText(text);
      setLoading(false);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="w-full max-w-lg p-8 bg-gray-800 bg-opacity-60 rounded-2xl shadow-lg backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center mb-6">📄 Cloud OCR Scanner</h1>
        
        <div className="border-2 border-dashed border-gray-500 p-6 rounded-lg text-center">
          <input type="file" onChange={handleFileChange} className="hidden" id="fileUpload" />
          <label htmlFor="fileUpload" className="cursor-pointer text-lg text-gray-300">
            {file ? file.name : "Click to upload an image"}
          </label>
        </div>

        <button
          onClick={handleUpload}
          className="w-full mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all"
          disabled={loading}
        >
          {loading ? "Processing..." : "Extract Text"}
        </button>

        {text && (
          <div className="mt-4 p-4 bg-gray-700 rounded-lg">
            <h2 className="text-lg font-semibold">Extracted Text:</h2>
            <p className="text-gray-300">{text}</p>
          </div>
        )}
      </div>
    </div>
  );
}
