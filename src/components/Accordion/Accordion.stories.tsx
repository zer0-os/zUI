import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Accordion } from './';

export default {
  title: 'Data Display/Accordion',
  component: Accordion
} as ComponentMeta<typeof Accordion>;

const items = [
  {
    title: 'Short Content',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed. '
  },
  {
    title: 'Medium Content',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum bibendum metus, sit amet auctor erat rutrum ac. Curabitur nec lectus in tellus egestas aliquet non ac lorem. Curabitur id mauris nisi. Ut velit felis, posuere eu gravida quis, varius ullamcorper leo. Sed interdum posuere diam vitae facilisis. Sed commodo consectetur est consequat aliquam. Vestibulum vel tempor nibh, a pellentesque erat. Ut mauris orci, vehicula ut sagittis quis, eleifend vel ante. Maecenas sed lacinia dolor. Vivamus condimentum hendrerit turpis vitae porta. Nunc malesuada massa sit amet sem aliquet, non posuere odio placerat. Curabitur leo ipsum, ultricies sed finibus quis, sodales.'
  },
  {
    title: 'Long Content',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius aliquet diam, sed luctus mauris lobortis eu. Vivamus nec mollis ipsum. Etiam nisl risus, facilisis eu pulvinar sed, tempus non massa. Maecenas quis nisi quam. Aenean mattis sit amet felis sed pellentesque. Sed sollicitudin risus eget neque tincidunt auctor. Vivamus luctus ipsum sit amet quam dictum, nec fringilla purus consectetur. Vestibulum consequat sollicitudin libero sit amet luctus. Donec consequat dui et nibh lacinia malesuada. Maecenas a augue a quam aliquam semper. Duis pellentesque venenatis lorem, eu dignissim tortor. In vel nibh ante. In molestie risus lorem, ac pharetra orci cursus nec. Suspendisse pretium sed erat in tempor. Suspendisse iaculis erat id scelerisque vehicula. Phasellus nec egestas nisl. Sed aliquet, ante sit amet lacinia egestas, nisi diam semper lacus, non bibendum leo urna sed mauris. Nunc eu quam tempor, venenatis urna in, tristique nisl. Duis elementum, mi vitae sodales dapibus, nulla ligula rhoncus magna, non malesuada erat libero a quam. Etiam suscipit libero risus, et tristique nibh dignissim nec. Nam placerat, urna sit amet rutrum commodo, erat libero gravida risus, at convallis sapien turpis eget justo. Morbi mollis dictum ante, tincidunt egestas sapien. Quisque nec ullamcorper augue. Etiam vitae quam a. '
  },
  {
    title: 'Short Content (Copy)',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed. '
  },
  {
    title: 'Medium Content (Copy)',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum bibendum metus, sit amet auctor erat rutrum ac. Curabitur nec lectus in tellus egestas aliquet non ac lorem. Curabitur id mauris nisi. Ut velit felis, posuere eu gravida quis, varius ullamcorper leo. Sed interdum posuere diam vitae facilisis. Sed commodo consectetur est consequat aliquam. Vestibulum vel tempor nibh, a pellentesque erat. Ut mauris orci, vehicula ut sagittis quis, eleifend vel ante. Maecenas sed lacinia dolor. Vivamus condimentum hendrerit turpis vitae porta. Nunc malesuada massa sit amet sem aliquet, non posuere odio placerat. Curabitur leo ipsum, ultricies sed finibus quis, sodales.'
  },
  {
    title: 'Long Content (Copy)',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius aliquet diam, sed luctus mauris lobortis eu. Vivamus nec mollis ipsum. Etiam nisl risus, facilisis eu pulvinar sed, tempus non massa. Maecenas quis nisi quam. Aenean mattis sit amet felis sed pellentesque. Sed sollicitudin risus eget neque tincidunt auctor. Vivamus luctus ipsum sit amet quam dictum, nec fringilla purus consectetur. Vestibulum consequat sollicitudin libero sit amet luctus. Donec consequat dui et nibh lacinia malesuada. Maecenas a augue a quam aliquam semper. Duis pellentesque venenatis lorem, eu dignissim tortor. In vel nibh ante. In molestie risus lorem, ac pharetra orci cursus nec. Suspendisse pretium sed erat in tempor. Suspendisse iaculis erat id scelerisque vehicula. Phasellus nec egestas nisl. Sed aliquet, ante sit amet lacinia egestas, nisi diam semper lacus, non bibendum leo urna sed mauris. Nunc eu quam tempor, venenatis urna in, tristique nisl. Duis elementum, mi vitae sodales dapibus, nulla ligula rhoncus magna, non malesuada erat libero a quam. Etiam suscipit libero risus, et tristique nibh dignissim nec. Nam placerat, urna sit amet rutrum commodo, erat libero gravida risus, at convallis sapien turpis eget justo. Morbi mollis dictum ante, tincidunt egestas sapien. Quisque nec ullamcorper augue. Etiam vitae quam a. '
  }
];

const Template: ComponentStory<typeof Accordion> = args => <Accordion {...args} items={args.items ?? items} />;

export const LowContrast = Template.bind({});
LowContrast.args = {
  contrast: 'low'
};

export const HighContrast = Template.bind({});
HighContrast.args = {
  contrast: 'high'
};
