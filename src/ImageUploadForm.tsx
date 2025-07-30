import React, { useState, ChangeEvent } from 'react';
import { uploadFile, signInWithGoogle, User, db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import './ImageUploadForm.css';

const FileUploader: React.FC<{ userId: string }> = ({ userId }) => {
  const [file, setFile] = useState<File | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ url: string; ref: string } | null>(null);
  
  // Генерируем уникальный ID для анализа
  const analysisId = uuidv4();
  const storagePath = `uploads/${userId}/${analysisId}_`;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if  (!file || !userId) {
      setError('Выберите файл');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (!user) {
        const signedInUser = await signInWithGoogle();
        setUser(signedInUser);
      }
      
      const uploadResult = await uploadFile(file,storagePath);
      setResult(uploadResult);

      await setDoc(doc(db, 'analysis_requests', analysisId), {
        userId,
        imagePath: `${storagePath}${file.name}`,
        status: 'pending',
        createdAt: new Date()
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg">  
      {user && (
        <div className="mb-4">
          <img 
            src={user.photoURL || ''} 
            alt="User" 
            className="w-10 h-10 rounded-full inline-block mr-2"
          />
          <span>{user.displayName || user.email}</span>
        </div>
      )}

      <input 
        type="file" 
        onChange={handleFileChange} 
        className="file-input"
        disabled={loading}
      />

      {file && (
        <div className="mb-4">
          <p className="text-gray-600">Выбран файл: {file.name}</p>
          <p className="text-gray-600">Размер: {(file.size / 1024).toFixed(2)} KB</p>
        </div>
      )}

      <button
        className='upload-btn'
        onClick={handleUpload}
        disabled={!file || loading}
        
      >
        {loading ? 'Загрузка...' : 'Загрузить'}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {result && (
        <div className="mt-4 p-3 bg-green-100 rounded">
          <p className="text-green-600">Файл загружен!</p>
          <a 
            href={result.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Открыть файл
          </a>
        </div>
      )}
    </div>
  );
};

export default FileUploader;