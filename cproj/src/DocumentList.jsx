import { useEffect, useState } from "react";
import { storage } from "../firebase";
import { listAll, getDownloadURL, ref } from "firebase/storage";

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const storageRef = ref(storage, "documents/");
      const result = await listAll(storageRef);
      const docs = await Promise.all(
        result.items.map(async (item) => ({
          name: item.name,
          url: await getDownloadURL(item),
        }))
      );
      setDocuments(docs);
    };

    fetchDocuments();
  }, []);

  return (
    <div className="document-list">
      <h2>Uploaded Documents</h2>
      <ul>
        {documents.map((doc, index) => (
          <li key={index}>
            <a href={doc.url} target="_blank" rel="noopener noreferrer">
              {doc.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
