'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

interface UploadResult {
  success: boolean;
  recordsProcessed: number;
  recordsFailed: number;
  errors?: string[];
  message: string;
}

export default function DEAFUploadPage() {
  const t = (key: string, fallback?: string) => fallback || key;
  const [isUploading, setIsUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<UploadResult | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.name.endsWith('.csv')) {
        setSelectedFile(file);
        setUploadResult(null);
      } else {
        setUploadResult({
          success: false,
          recordsProcessed: 0,
          recordsFailed: 0,
          message: 'Please select a CSV file',
        });
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.name.endsWith('.csv')) {
        setSelectedFile(file);
        setUploadResult(null);
      } else {
        setUploadResult({
          success: false,
          recordsProcessed: 0,
          recordsFailed: 0,
          message: 'Please select a CSV file',
        });
      }
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadResult({
        success: false,
        recordsProcessed: 0,
        recordsFailed: 0,
        message: 'Please select a file to upload',
      });
      return;
    }

    setIsUploading(true);
    setUploadResult(null);

    try {
      const formData = new FormData();
      formData.append('csvFile', selectedFile);

      const response = await fetch('/api/admin/deaf-upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setUploadResult(result);
    } catch (error) {
      setUploadResult({
        success: false,
        recordsProcessed: 0,
        recordsFailed: 0,
        message: 'Upload failed. Please try again.',
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setUploadResult(null);
    setIsUploading(false);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold text-text-primary mb-2">
            {t('deaf.upload.title', 'DEAF CSV Upload')}
          </h1>
          <p className="text-text-secondary">
            {t('deaf.upload.subtitle', 'Upload Depositor Education and Awareness Fund (DEAF) records from CSV file')}
          </p>
        </div>

        {/* Upload Form */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-text-primary">
              {t('deaf.upload.formTitle', 'Upload CSV File')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* File Drop Zone */}
            <div
              className={cn(
                'border-2 border-dashed rounded-lg p-8 text-center transition-colors',
                dragActive
                  ? 'border-brand-accent bg-brand-accent/5'
                  : 'border-border hover:border-brand-primary/50'
              )}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-brand-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
                
                <div>
                  <p className="text-text-primary font-medium mb-2">
                    {t('deaf.upload.dragDrop', 'Drag and drop your CSV file here')}
                  </p>
                  <p className="text-text-secondary text-sm mb-4">
                    {t('deaf.upload.or', 'or')}
                  </p>
                  <label className="inline-block">
                    <input
                      type="file"
                      accept=".csv"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Button variant="outline" size="sm" asChild>
                      <span>{t('deaf.upload.browse', 'Browse Files')}</span>
                    </Button>
                  </label>
                </div>

                <p className="text-xs text-text-secondary">
                  {t('deaf.upload.fileFormat', 'Supported format: CSV (Max 10MB)')}
                </p>
              </div>
            </div>

            {/* Selected File */}
            {selectedFile && (
              <div className="bg-surface border border-border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-brand-primary/10 rounded flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-brand-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">{selectedFile.name}</p>
                      <p className="text-sm text-text-secondary">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleReset}
                    className="text-error hover:text-error/90"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            )}

            {/* Upload Button */}
            <div className="flex justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={handleUpload}
                disabled={!selectedFile || isUploading}
                className="px-8"
              >
                {isUploading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    {t('deaf.upload.uploading', 'Uploading...')}
                  </>
                ) : (
                  t('deaf.upload.upload', 'Upload CSV')
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Upload Result */}
        {uploadResult && (
          <Card>
            <CardHeader>
              <CardTitle className={cn(
                uploadResult.success ? 'text-success' : 'text-error'
              )}>
                {uploadResult.success 
                  ? t('deaf.upload.success', 'Upload Successful')
                  : t('deaf.upload.failed', 'Upload Failed')
                }
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">{uploadResult.message}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface rounded p-4 text-center">
                  <p className="text-2xl font-bold text-success">
                    {uploadResult.recordsProcessed}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {t('deaf.upload.recordsProcessed', 'Records Processed')}
                  </p>
                </div>
                <div className="bg-surface rounded p-4 text-center">
                  <p className="text-2xl font-bold text-error">
                    {uploadResult.recordsFailed}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {t('deaf.upload.recordsFailed', 'Records Failed')}
                  </p>
                </div>
              </div>

              {uploadResult.errors && uploadResult.errors.length > 0 && (
                <div className="bg-error/10 border border-error/20 rounded-lg p-4">
                  <h4 className="font-medium text-error mb-2">
                    {t('deaf.upload.errors', 'Errors')}
                  </h4>
                  <ul className="text-sm text-error space-y-1">
                    {uploadResult.errors.slice(0, 10).map((error, index) => (
                      <li key={index}>• {error}</li>
                    ))}
                    {uploadResult.errors.length > 10 && (
                      <li>• ...and {uploadResult.errors.length - 10} more errors</li>
                    )}
                  </ul>
                </div>
              )}

              <div className="flex justify-center">
                <Button variant="outline" onClick={handleReset}>
                  {t('deaf.upload.uploadAnother', 'Upload Another File')}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-text-primary">
              {t('deaf.upload.instructions', 'Instructions')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-text-secondary">
              <p>
                {t('deaf.upload.instruction1', '1. Prepare your CSV file with the following columns:')}
              </p>
              <ul className="ml-4 space-y-1 font-mono text-xs">
                <li>• S.No., Customer ID, GL Code, New AC Number, DEAF New AC No.</li>
                <li>• Account Name, Address, State, District, Transaction Date, DEAF Amount</li>
              </ul>
              <p>
                {t('deaf.upload.instruction2', '2. Ensure all required fields are filled and data is properly formatted.')}
              </p>
              <p>
                {t('deaf.upload.instruction3', '3. The system will validate the data and save valid records.')}
              </p>
              <p>
                {t('deaf.upload.instruction4', '4. Invalid records will be skipped and reported in the error log.')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


