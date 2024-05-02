import React, { ChangeEvent, useRef } from 'react';
import "./styles.css"

interface FileInputProps {
  onChange: (file: File) => void;
  file: File;
  alt?: boolean;
}

const FileInput = ({ onChange, file, alt = false }: FileInputProps) => {

  const inputRef = useRef<HTMLInputElement>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onChange(e.target.files[0]);
    }
  };

  return (
    <>
      <div className="file-input">
        <input
          ref={inputRef}
          id="customFileLang"
          lang="pt-bt"
          type="file"
          accept="image/*"
          hidden={true}
          onChange={handleFileChange}
        ></input>
        <button type="button" onClick={() => inputRef.current.click()}>
          Selecionar
        </button>
        <label htmlFor="customFileLang">
          {file ? file.name : 'Nenhum arquivo escolhido'}
        </label>
      </div>
    </>
  );
};

export default FileInput;
