import type { Meta, StoryFn } from '@storybook/react';
import { ArrowLink } from '.';

export default {
  title: 'Navigation/Links/ArrowLink',
  component: ArrowLink
} as Meta<typeof ArrowLink>;

const Template: StoryFn<typeof ArrowLink> = args => {
  return (
    <ArrowLink {...args} href={'https://zero.tech/'}>
      Lorem Ipsum
    </ArrowLink>
  );
};

export const Default = Template.bind({});
