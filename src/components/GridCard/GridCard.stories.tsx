import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GridCard } from './';
import { NFT } from './templates/NFT';
import { Button } from '../../components/Button';
import { StoryCard, HotswapContainer } from '../.storybook';

export default {
  title: 'Data Display/Cards/Grid Card',
  component: GridCard
} as ComponentMeta<typeof GridCard>;

const CustomButton = <Button onPress={() => alert('Clicked')}>Custom</Button>;

const Template: ComponentStory<typeof GridCard> = args => {
  return (
    <StoryCard isContrast>
      <GridCard
        {...args}
        imageAlt={'Storybook mock image'}
        imageSrc={'https://picsum.photos/200/500'}
        children={<>Empty</>}
      />
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
      label={'Top Bid ($MOCK)'}
      primaryText={'1,234.50'}
      secondaryText={'$1,234.50'}
      title={'Lorem Ipsum'}
      zna={'lorem.ipsum'}
      button={CustomButton}
    />
  )
};
