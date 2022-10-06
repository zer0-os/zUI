import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GridCard } from './';
import { NFT } from './templates/NFT';
import { StoryCard, HotswapContainer } from '../.storybook';

export default {
  title: 'Data Display/Cards/Grid Card',
  component: GridCard
} as ComponentMeta<typeof GridCard>;

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
      buttonText={'Bid'}
      label={'Top Bid ($MOCK)'}
      onClickButton={() => alert('yeah')}
      primaryText={'1,234.50'}
      secondaryText={'$1,234.50'}
      title={'Lorem Ipsum'}
      zna={'lorem.ipsum'}
    />
  )
};
