import React from 'react';
import { StoryCard } from '../.storybook';
import './utils-stories.scss';

export default {
  title: 'Utils/Default',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true }
    },
    options: { showPanel: false }
  }
};

const HOOKS = ['useDidMount', 'useDidUpdate', 'usePrevious', 'usePropsState', 'useWillUnmount'];

const FORMAT_UTILS = ['formatWei', 'formatBigNumberString', 'formatFiat', 'formatPercentage', 'formatTimestamp'];

const UTILS = [
  {
    title: 'Hooks',
    utils: HOOKS
  },
  {
    title: 'Format utils',
    utils: FORMAT_UTILS
  }
];

export const Default = () => {
  return UTILS.map(({ title, utils }) => (
    <StoryCard key={title} title={title} className="utils-stories__card">
      <ul>
        {utils.map(hook => (
          <li key={hook} className="utils-stories__list-item">
            {hook}
          </li>
        ))}
      </ul>
    </StoryCard>
  ));
};
