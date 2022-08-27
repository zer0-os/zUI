import React, { FC, useRef } from 'react';
import './MediaInput.scss';

export type MediaInputProps = {
  mediaType: string | undefined;
  previewUrl: string;
  hasError: boolean;
  onChange: (mediaType: string, previewImage: string, image: Buffer) => void;
};

const MediaInput: FC<MediaInputProps> = ({ mediaType, previewUrl, hasError, onChange }) => {
  const inputFile = useRef<HTMLInputElement>(null);

  const openUploadDialog = () => (inputFile.current ? inputFile.current.click() : null);

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const type = event.target.files[0].type;
      if (!type.includes('image') && !type.includes('video')) return;

      // Raw data for image preview.
      const url = URL.createObjectURL(event.target.files[0]);

      // Uint8Array data for sending to IPFS.
      const bufferReader = new FileReader();
      bufferReader.readAsArrayBuffer(event.target.files[0]);
      bufferReader.onloadend = () =>
        onChange(type.includes('image') ? 'image' : 'video', url, Buffer.from(bufferReader.result as ArrayBuffer));
    }
  };

  const getPreview = (): JSX.Element => {
    if (!previewUrl) {
      return <span className="preview-text">Choose Media</span>;
    }

    if (mediaType === 'image') {
      return <img alt="NFT Preview" src={previewUrl as string} />;
    }

    return <video autoPlay controls loop src={previewUrl as string} />;
  };

  return (
    <div className="zui-media-input">
      <div
        data-testid="preview"
        className={`preview ${previewUrl && 'uploaded'} ${hasError && 'has-error'}`}
        onClick={openUploadDialog}
      >
        {getPreview()}
      </div>
      <input
        data-testid="input"
        ref={inputFile}
        name="media"
        type="file"
        accept="image/*,video/*,video/quicktime"
        multiple={false}
        onChange={onImageChange}
      />
    </div>
  );
};

export default MediaInput;
