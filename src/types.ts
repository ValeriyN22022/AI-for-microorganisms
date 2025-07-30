// Типы для экспорта
export type UploadResult = {
  url: string;
  ref: string;
};


// types.ts
export interface AnalysisResult {
  id: string;
  originalPath: string;
  resultUrl: string;
  counts: {
    bacteria: number;
    yeast: number;
    protozoa: number;
  };
  timestamp: Date;
}

export type AnalysisStatus = 'idle' | 'processing' | 'completed' | 'error';