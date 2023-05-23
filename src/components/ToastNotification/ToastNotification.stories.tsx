import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToastNotification } from './ToastNotification';
import { Modal } from '../Modal';

export default {
  title: 'Data Display/Toast Notification',
  component: ToastNotification
} as ComponentMeta<typeof ToastNotification>;

const Template: ComponentStory<typeof ToastNotification> = args => {
  const [isOpen, setIsOpen] = useState(false);
  const [openToast, setOpenToast] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setOpenToast(true), 2000);
  };

  const handleToastClose = () => {
    setOpenToast(false);
  };

  return (
    <React.Fragment>
      <Modal trigger="Open Modal" open={isOpen} onOpenChange={setIsOpen}>
        <p>This is a modal. Close this modal to see a toast notification after 2 seconds.</p>
        <button onClick={handleClose}>Close Modal</button>
      </Modal>

      <ToastNotification {...args} openToast={openToast} onClick={handleToastClose} onClose={handleToastClose} />
    </React.Fragment>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Toast Notification Title',
  description: 'Toast Notification Description',
  actionTitle: 'Invite',
  swipeDirection: 'left'
};
