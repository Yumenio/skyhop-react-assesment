// FileUpload.tsx
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const FileUploader: React.FC = () => {
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    setUploadedFileName(file.name)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className='flex flex-col items-center mt-4'>
      <div
        {...getRootProps()}
        className={`w-[400px] h-[200px] border-dashed border-2 rounded-lg border-gray-300 p-4 cursor-pointer relative flex items-center justify-center text-center ${isDragActive ? 'border-blue-500' : ''}`}
      >
        <input {...getInputProps()} />
        {uploadedFileName ? (
          <p className='bottom-2 left-2 bg-white text-gray-500 px-2 py-1 rounded'>
            {uploadedFileName}
          </p>
        ) : isDragActive ? (
          <p>Drop the file here</p>
        ) : (
          <p>
            Drag & Drop Here, or <b>Browse</b>
          </p>
        )}
      </div>
      <button
        className='mt-2 px-4 py-2 bg-skyhopBlue text-white cursor-pointer rounded-lg'
        onClick={() => document.getElementById('fileInput')?.click()}
      >
        Upload Manifest
      </button>
      <input
        id='fileInput'
        type='file'
        className='hidden'
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) {
            setUploadedFileName(file.name)
          }
        }}
      />
    </div>
  )
}

export default FileUploader
