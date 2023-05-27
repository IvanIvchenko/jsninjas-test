import { UploadFile } from 'antd';

export interface CustomImageUploadInputProps {
  onUpload: (images: UploadFile[]) => void;
  uploadedFiles: UploadFile[];
}