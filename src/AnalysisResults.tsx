import React from 'react';
import { useAnalysisResults } from './useAnalysisResults';
import { AnalysisStatus } from './types';

export const AnalysisResults: React.FC<{ userId: string }> = ({ userId }) => {
  const { results, status, error } = useAnalysisResults(userId);

  if (status === 'idle') {
    return <div>Ready to analyze images</div>;
  }

  if (status === 'processing') {
    return <div className="loading">Processing images...</div>;
  }

  if (status === 'error') {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="results-container">
      <h2>Analysis Results</h2>
      {results.length === 0 ? (
        <p>No results found</p>
      ) : (
        <div className="results-grid">
          {results.map((result) => (
            <div key={result.id} className="result-card">
              <div className="image-container">
                <img 
                  src={result.resultUrl} 
                  alt="Analysis result" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.jpg';
                  }}
                />
              </div>
              <div className="result-details">
                <h3>{result.originalPath.split('/').pop()}</h3>
                <ul>
                  <li>Bacteria: {result.counts.bacteria}</li>
                  <li>Yeast: {result.counts.yeast}</li>
                  <li>Protozoa: {result.counts.protozoa}</li>
                </ul>
                <p className="timestamp">
                  {result.timestamp.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};