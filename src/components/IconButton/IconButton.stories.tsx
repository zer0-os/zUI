import type { Meta, StoryFn } from '@storybook/react';
import { IconButton } from './';

import { IconXClose } from '../Icons';

export default {
  title: 'Inputs/IconButton',
  component: IconButton
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = args => {
  return <IconButton {...args} />;
};

export const CloseIconLarge = Template.bind({ title: 'Close Icon Button' });
CloseIconLarge.args = {
  onClick: (): void => null,
  Icon: IconXClose,
  size: 'large'
};

export const CloseIconSmall = Template.bind({ title: 'Close Icon Button' });
CloseIconSmall.args = {
  onClick: (): void => null,
  Icon: IconXClose,
  size: 'small'
};

export const CloseIconXSmall = Template.bind({ title: 'Close Icon Button' });
CloseIconXSmall.args = {
  onClick: (): void => null,
  Icon: IconXClose,
  size: 'x-small'
};

export const CloseIconCustomLarger = Template.bind({ title: 'Close Icon Button' });
CloseIconCustomLarger.args = {
  onClick: (): void => null,
  Icon: IconXClose,
  size: 68
};

export const CloseIconCustomSmaller = Template.bind({ title: 'Close Icon Button' });
CloseIconCustomSmaller.args = {
  onClick: (): void => null,
  Icon: IconXClose,
  size: 12
};
