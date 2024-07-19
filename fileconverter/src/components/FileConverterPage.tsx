// src/components/FileConverterPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FileConverterPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/converter');
  };

  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold mb-4">File Converter</h1>
      <p>Click TESTINGthe button below to get started converting your files to the format of your choosing!</p>
      <button
        onClick={handleNavigate}
        className="mt-5 bg-purple-700 text-white font-bold py-2 px-4 rounded hover:bg-purple-800 transition duration-300"
      >
        File Converter
      </button>
    </div>
  );
};

export default FileConverterPage;
