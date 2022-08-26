import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MediaInput from './MediaInput';
import { StoryCard } from '../.storybook';

export default {
  title: 'Inputs/MediaInput',
  component: MediaInput
} as ComponentMeta<typeof MediaInput>;

const Template: ComponentStory<typeof MediaInput> = args => {
  const [mediaType, setMediaType] = useState(args.mediaType);
  const [previewUrl, setPreviewUrl] = useState(args.previewUrl);

  const handleChange = (mediaType: string, previewUrl: string, image: Buffer): void => {
    setMediaType(mediaType);
    setPreviewUrl(previewUrl);
    console.log(image, 'image');
  };

  return (
    <StoryCard isContrast>
      <MediaInput {...args} mediaType={mediaType} previewUrl={previewUrl} onChange={handleChange} />
    </StoryCard>
  );
};

export const Default = Template.bind({});

Default.args = {
  hasError: false
};
