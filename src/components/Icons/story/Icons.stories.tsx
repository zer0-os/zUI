import React from 'react';
import * as Icons from '../';
import { StoryCard } from '../../.storybook';

import './Icons.story.scss';

const icons = Object.values(Icons);

export const AllIcons = () => (
  <StoryCard isContrast>
    {icons.map((Icon, index) => (
      <div className={'icon'} key={Object.keys(Icons)[index]}>
        <p>{Object.keys(Icons)[index]}</p>
        <Icon key={index} />
      </div>
    ))}
  </StoryCard>
);

export default {
  title: 'Data Display/Icons'
};
