import React from 'react';
import { chunk } from 'lodash';
import { StoryCard } from '../../.storybook';
import { HEADER_CELLS, ICONS, ICONS_CHUNK_SIZE } from './Icons.stories.constants';
import './icons-story.scss';

export default {
  title: 'Style Guide/Icons',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true }
    },
    options: { showPanel: false }
  }
};

export const Icons = () => {
  return (
    <StoryCard title="Icons">
      {chunk(ICONS, ICONS_CHUNK_SIZE).map((iconsChunk, chunkIndex) => (
        <table key={chunkIndex} className="icons-story__table" cellSpacing={0}>
          <tr className="icons-story__table-row">
            {HEADER_CELLS.map(name => (
              <th key={name} className="icons-story__table-cell--is-header">
                {name}
              </th>
            ))}
          </tr>
          {iconsChunk.map(({ name, Component }, i) => (
            <tr key={name} className="icons-story__table-row">
              <td className="icons-story__table-cell">{i + 1 + chunkIndex * ICONS_CHUNK_SIZE}</td>
              <td className="icons-story__table-cell">{name}</td>
              <td className="icons-story__table-cell">
                <Component />
              </td>
            </tr>
          ))}
        </table>
      ))}
    </StoryCard>
  );
};
