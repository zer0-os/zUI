import type { Meta, StoryFn } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

import './Tooltip.scss';

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = args => (
  <Tooltip {...args}>
    <Button>Click or Hover</Button>
  </Tooltip>
);

export const Default = Template.bind({});
Default.args = {
  side: 'top',
  align: 'center',
  content: 'This may take up to 20 minutes depending on the state of the Ethereum network.'
};
