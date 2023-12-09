import React, { useRef, useState, ChangeEvent } from "react";
import FileUpload from "../../../assets/images/FileUpload.png";

interface CustomFileInputProps {
  label: string;
  id: string;
}

export default function CustomFileInput({ label, id }: CustomFileInputProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
    }
  };

  return (
    <div>
      <label htmlFor={id} className="custom-file-input">
        <input
          type="file"
          id={id}
          name={id}
          ref={fileInputRef}
          onChange={handleFileSelect}
          style={{ display: "none" }}
          className=""
        />
        <div className="bg-white rounded flex justify-center items-center min-h-[200px] sm:min-h-[300px] relative border border-gpgp-blue">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              {selectedFile ? (
                <span className="selected-file-name">{selectedFile.name}</span>
              ) : (
                <span className="text-[#B4B4B9] flex flex-col items-center cursor-pointer">
                  Drag and drop your file here
                  <h3 className=" text-[3rem] text-[#1f2d5a8e]">+</h3>
                </span>
              )}
            </div>
            <div className="absolute bottom-[4px] right-[13px] flex flex-row items-center">
              <h4 className="text-[#B4B4B9]">Browse Files</h4>
              <img src={FileUpload} alt="Upload" className="w-[27px] ml-2" />
            </div>
          </div>
        </div>
      </label>
    </div>
  );
}