import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GridCard } from './';
import NFT from './templates/NFT';
import { StoryCard, HotswapContainer } from '../.storybook';

export default {
  title: 'Grid Card',
  component: GridCard
} as ComponentMeta<typeof GridCard>;

const Template: ComponentStory<typeof GridCard> = args => {
  return (
    <StoryCard isContrast>
      <GridCard {...args} />
    </StoryCard>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: <HotswapContainer />
};

export const NFTTemplate = Template.bind({ title: 'NFT Template' });
NFTTemplate.args = {
  children: (
    <NFT
      buttonText={'Button'}
      label={'3291503821059321095832190532'}
      onClickButton={() => alert('yeah')}
      primaryText={'1,234.00953021593210953291053215321532155'}
      secondaryText={'$1,234.0032981683921065839532153215321532102168903'}
      title={'Title638219638921673921863216'}
      zna={'network.name.3261.3216.312.632153216631.5321.53215.32153216321'}
    />
  )
};
