import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalConfirmation } from './ModalConfirmation';
import { StoryCard } from '../.storybook';

export default {
  title: 'Data Display/Modal',
  component: ModalConfirmation
} as ComponentMeta<typeof ModalConfirmation>;

const Template: ComponentStory<typeof ModalConfirmation> = args => {
  return (
    <StoryCard isContrast>
      <ModalConfirmation {...args} />
    </StoryCard>
  );
};

export const Confirmation = Template.bind({});
Confirmation.args = {
  trigger: 'Click me!',
  title: 'Delete message',
  cancelLabel: 'Cancel',
  confirmationLabel: 'Delete message',
  children: <>Are you sure you want to delete this message</>
};
