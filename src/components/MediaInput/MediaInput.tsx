//- React Imports
import React, { FC, useRef } from 'react';
import classNames from 'classnames/bind';

//- Style Imports
import './MediaInput.scss';

//- Component Imports
import Preview from './Preview';

//- Type Imports
import { MediaType } from './MediaInput.types';

export type MediaInputProps = {
  className?: string;
  mediaType: MediaType | undefined;
  previewUrl: string;
  hasError: boolean;
  onChange: (mediaType: MediaType, previewImage: string, image: Buffer) => void;
};

const MediaInput: FC<MediaInputProps> = ({ className = '', mediaType, previewUrl, hasError, onChange }) => {
  const inputFile = useRef<HTMLInputElement>(null);

  const openUploadDialog = () => inputFile.current?.click();

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

  return (
    <div className="zui-media-input">
      <div
        data-testid="preview-container"
        className={classNames('zui-media-input-preview', className, {
          'zui-media-input-uploaded': previewUrl,
          'zui-media-input-error': hasError
        })}
        onClick={openUploadDialog}
      >
        {mediaType && previewUrl ? (
          <Preview data-testid="preview" mediaType={mediaType} previewUrl={previewUrl} />
        ) : (
          <span className="zui-media-input-preview-text">Choose Media</span>
        )}
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
