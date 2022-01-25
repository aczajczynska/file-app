import React, { ReactNode, useState } from "react";

export interface FilesToUploadContextTypes {
  filesList?: any;
  setFilesList?: (_value: any) => void;
}

export const FilesToUploadContext = React.createContext({
  filesList: [],
  setFilesList: (_value: any) => {},
});

export interface FilesToUploadProviderProps {
  children: ReactNode;
}

export const FilesProvider = ({ children }: FilesToUploadProviderProps) => {
  const [filesList, setFilesList] = useState([]);

  return (
    <FilesToUploadContext.Provider
      value={{
        filesList,
        setFilesList,
      }}
    >
      {children}
    </FilesToUploadContext.Provider>
  );
};
