import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MediaInput } from './MediaInput';

import { MediaType } from './MediaInput.types';

export default {
  title: 'Inputs/MediaInput',
  component: MediaInput
} as ComponentMeta<typeof MediaInput>;

const Template: ComponentStory<typeof MediaInput> = args => {
  const [mediaType, setMediaType] = useState(args.mediaType);
  const [previewUrl, setPreviewUrl] = useState(args.previewUrl);

  const handleChange = (mediaType: MediaType, previewUrl: string): void => {
    setMediaType(mediaType);
    setPreviewUrl(previewUrl);
  };

  return <MediaInput {...args} mediaType={mediaType} previewUrl={previewUrl} onChange={handleChange} />;
};

export const Default = Template.bind({});

Default.args = {
  className: 'media-input',
  title: 'Select files...',
  subtitle: '(Optional)',
  hasError: false
};
