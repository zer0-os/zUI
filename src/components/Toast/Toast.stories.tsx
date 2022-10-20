import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Toast } from './Toast';
import { Button } from '../Button';
import { StoryCard } from '../.storybook';

export default {
  title: 'Data Display/Toast',
  component: Toast
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = args => {
  const [open, setOpen] = useState<boolean>(false);

  const onPress = () => {
    setOpen(true);
  };

  return (
    <StoryCard isContrast isContentCentered isHeightFull>
      <Button onPress={onPress}>Click</Button>
      <Toast {...args} open={open} onOpenChange={setOpen} />
    </StoryCard>
  );
};

const args = {
  title: 'Toast Notification',
  description: 'This is some notification content',
  actionButtonText: 'Button',
  actionAltText: 'This may take up to 20 minutes depending on the state of the Ethereum network.'
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  ...args
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  ...args
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  ...args
};
