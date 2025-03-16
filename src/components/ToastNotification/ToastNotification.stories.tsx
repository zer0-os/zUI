import { Fragment, useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { ToastNotification } from './ToastNotification';
import { Modal } from '../Modal';

export default {
  title: 'Data Display/Toast Notification',
  component: ToastNotification
} as Meta<typeof ToastNotification>;

const Template: StoryFn<typeof ToastNotification> = args => {
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
    <Fragment>
      <Modal trigger="Open Modal" open={isOpen} onOpenChange={setIsOpen}>
        <p>This is a modal. Close this modal to see a toast notification after 2 seconds.</p>
        <p>Edit the duration attribute to increase/decrease the duration toast is visible</p>
        <button onClick={handleClose}>Close Modal</button>
      </Modal>

      <ToastNotification {...args} openToast={openToast} onClick={handleToastClose} onClose={handleToastClose} />
    </Fragment>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Toast Notification Title',
  description: 'Toast Notification Description',
  actionTitle: 'Invite',
  swipeDirection: 'left',
  duration: 10000
};
