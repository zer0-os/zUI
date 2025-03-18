import { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Lightbox } from './';

export default {
  title: 'Media/Lightbox',
  component: Lightbox
} as Meta<typeof Lightbox>;

const mockProvider = {
  fitWithinBox: () => ({ width: 800, height: 600 }),
  getSource: ({ src }: { src: string }) => src
};

const mockItems = [
  { url: 'https://picsum.photos/800/600?random=1', type: 'image', name: 'image-1.jpg', mimetype: 'image/jpeg' },
  {
    url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDI5ZHJxY3Nwd2t1NWFyOXF1NnBjbWRwbXd0Y2Jya2JyZWFqcmN6eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKnxHjxLANJQxuE/giphy.gif',
    type: 'image',
    name: 'animation.gif',
    mimetype: 'image/gif'
  },
  { url: 'https://picsum.photos/800/600?random=2', type: 'image', name: 'image-2.jpg', mimetype: 'image/jpeg' },
  { url: 'https://picsum.photos/800/600?random=3', type: 'image', name: 'image-3.jpg', mimetype: 'image/jpeg' }
];

const Template: StoryFn<typeof Lightbox> = args => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <img
        src={mockItems[args.startingIndex || 0].url}
        alt="Click to open lightbox"
        onClick={() => setIsOpen(true)}
        style={{
          cursor: 'pointer',
          maxWidth: '300px',
          borderRadius: '4px'
        }}
      />
      {isOpen && <Lightbox {...args} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: mockItems,
  provider: mockProvider,
  startingIndex: 0
};

export const SingleImage = Template.bind({});
SingleImage.args = {
  items: [mockItems[0]],
  provider: mockProvider
};

export const StartWithGif = Template.bind({});
StartWithGif.args = {
  items: mockItems,
  provider: mockProvider,
  startingIndex: 1
};

export const CustomStartingIndex = Template.bind({});
CustomStartingIndex.args = {
  items: mockItems,
  provider: mockProvider,
  startingIndex: 2
};
