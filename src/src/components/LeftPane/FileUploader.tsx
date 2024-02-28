import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FaFileAlt  } from "react-icons/fa";
import PaneSectionHeader from '../Common/PaneSectionHeader'

const FileUploader: React.FC = () => {
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    setUploadedFileName(file.name)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className='mt-4'>
      <PaneSectionHeader title="Select a manifest you'd like to import" />
      <div className="flex flex-col items-center border-2 rounded-lg w-11/12 p-4">
        <div
          {...getRootProps()}
          className={"flex flex-col justify-center border-dashed border-2 rounded-lg border-gray-300 w-full h-[150px] cursor-pointer text-center"}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center">
            <FaFileAlt  className="text-orange-400 size-6"/>
            {uploadedFileName ? (
              <p className='bottom-2 left-2 bg-white text-gray-500 px-2 py-1 rounded'>
                {uploadedFileName}
              </p>
            ) : isDragActive ? (
              <p>Drop the file here</p>
              ) : (
                <p>
                Drag & Drop Here Or <b>Browse</b>
              </p>
            )}
          </div>
        </div>
          <button
            className='mt-2 w-3/5 py-4 bg-skyhopBlue text-white cursor-pointer rounded-lg'
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
    </div>
  )
}

export default FileUploader
