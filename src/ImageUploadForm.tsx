import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios, { AxiosError, AxiosProgressEvent } from 'axios';
import './ImageUploadForm.css'

const ImageUploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  // Обработчик изменения файла
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  // Обработчик отправки формы
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      setError('Пожалуйста, выберите файл');
      return;
    }

    // Проверка размера файла (например, до 10MB)
    const MAX_FILE_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_FILE_SIZE) {
      setError('Файл слишком большой (максимум 10MB)');
      return;
    }

    setUploading(true);
    setError(null);
    setSuccess(false);
    setProgress(0);

    try {
      const formData = new FormData();
      formData.append('file', file);

      // Замените URL на ваш Google Apps Script или API endpoint
      const response = await axios.post<{
        status: string;
        fileId?: string;
        url?: string;
        message?: string;
      }>(
        'https://script.google.com/macros/s/AKfycbyVRcnnOI2tm3mZ2W0Fzgs0C-Yu79xPIzXubL5hwJyTzLm3ueA0fqscp5CtYM4vLbcKgQ/exec',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent: AxiosProgressEvent) => {
            if (progressEvent.total) {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setProgress(percentCompleted);
            }
          },
        }
      );

      console.log('Успешная загрузка:', response.data);
      setSuccess(true);
    } catch (err) {
      const error = err as AxiosError | Error;
      console.error('Ошибка загрузки:', error);
      setError(error.message || 'Произошла ошибка при загрузке файла');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-container">
      <h2>Загрузка изображения</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="file-upload" className="file-label">
            {file ? file.name : 'Выберите изображение'}
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            className="file-input"
          />
        </div>

        {file && (
          <div className="preview">
            <p>Предпросмотр:</p>
            <img 
              src={URL.createObjectURL(file)} 
              alt="Preview" 
              className="preview-image"
            />
          </div>
        )}

        <button 
          type="submit" 
          disabled={uploading || !file}
          className="submit-button"
        >
          {uploading ? `Загрузка... ${progress}%` : 'Отправить'}
        </button>

        {error && <div className="error-message">{error}</div>}
        {success && (
          <div className="success-message">
            Файл успешно загружен!
          </div>
        )}
      </form>
    </div>
  );
};

export default ImageUploadForm;