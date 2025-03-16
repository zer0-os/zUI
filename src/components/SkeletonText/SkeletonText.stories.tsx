import type { Meta, StoryFn } from '@storybook/react';
import { SkeletonText } from './';

export default {
  title: 'Typography/Skeleton Text',
  component: SkeletonText
} as Meta<typeof SkeletonText>;

const Template: StoryFn<typeof SkeletonText> = args => {
  return <SkeletonText skeletonOptions={{ width: 50 }} {...args} />;
};

export const Loading = Template.bind({});
Loading.args = {
  asyncText: {
    isLoading: true
  }
};

export const Loaded = Template.bind({});
Loaded.args = {
  asyncText: {
    isLoading: false,
    text: 'Loaded'
  }
};

export const CustomError = Template.bind({});
CustomError.args = {
  asyncText: {
    isLoading: false,
    errorText: 'Custom error text'
  }
};

export const DefaultError = Template.bind({});
DefaultError.args = {
  asyncText: {
    isLoading: false
  }
};

export const AsElement = () => {
  const isLoading = false;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      You can render SkeletonText as any text element, e.g.
      <SkeletonText as="h1" asyncText={{ text: 'As an <h1>', isLoading }} />
      <SkeletonText as="h1" asyncText={{ isLoading: true }} />
      <SkeletonText as="h2" asyncText={{ text: 'As an <h2>', isLoading }} />
      <SkeletonText as="h2" asyncText={{ isLoading: true }} />
      <SkeletonText as="p" asyncText={{ text: 'As a <p>', isLoading }} />
      <SkeletonText as="p" asyncText={{ isLoading: true }} />
      <SkeletonText as="b" asyncText={{ text: 'As a <b>', isLoading }} />
      <SkeletonText as="b" asyncText={{ isLoading: true }} />
    </div>
  );
};
