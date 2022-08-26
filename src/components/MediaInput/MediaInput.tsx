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

  const onImageChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <>
      <div
        onClick={openUploadDialog}
        className={`zui-media-input-preview ${previewUrl && 'uploaded'}`}
        style={{
          borderColor: hasError ? '#d379ff' : ''
        }}
      >
        {!previewUrl && <span className="preview-text">Choose Media</span>}
        {previewUrl && mediaType === 'image' && <img alt="NFT Preview" src={previewUrl as string} />}
        {previewUrl && mediaType === 'video' && <video autoPlay controls loop src={previewUrl as string} />}
      </div>
      <input
        data-testid="media-input"
        style={{ display: 'none' }}
        accept="image/*,video/*,video/quicktime"
        multiple={false}
        name={'media'}
        type="file"
        onChange={onImageChanged}
        ref={inputFile}
      />
    </>
  );
};

export default MediaInput;
