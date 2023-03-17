import React from 'react';
import * as Icons from '../';
import { StoryCard } from '../../.storybook';

export const AllIcons = () => (
  <StoryCard isContrast>
    {Object.values(Icons).map((Icon, index) => (
      <Icon key={index} />
    ))}
  </StoryCard>
);

export default {
  title: 'Data Display/Icons'
};