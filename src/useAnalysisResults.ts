import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { AnalysisResult, AnalysisStatus } from './types';

export const useAnalysisResults = (userId?: string) => {
  const [results, setResults] = useState<AnalysisResult[]>([]);
  const [status, setStatus] = useState<AnalysisStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    setStatus('processing');
    
    try {
      const resultsRef = collection(db, 'analysis_results');
      const q = query(
        resultsRef,
        where('userId', '==', userId),
        orderBy('timestamp', 'desc')
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const newResults = snapshot.docs.map(doc => ({
          id: doc.id,
          originalPath: doc.data().originalPath,
          resultUrl: doc.data().resultUrl,
          counts: doc.data().counts,
          timestamp: doc.data().timestamp.toDate()
        } as AnalysisResult));

        setResults(newResults);
        setStatus('completed');
      });

      return () => unsubscribe();
    } catch (err) {
      setError('Failed to fetch results');
      setStatus('error');
      console.error(err);
    }
  }, [userId]);

  return { results, status, error };
};