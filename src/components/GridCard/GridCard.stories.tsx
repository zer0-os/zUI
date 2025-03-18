import type { Meta, StoryFn } from '@storybook/react';
import { GridCard } from './';
import { NFT } from './templates/NFT';
import { Button } from '../../components/Button';
import { HotswapContainer } from '../.storybook';

export default {
  title: 'Data Display/Cards/Grid Card',
  component: GridCard
} as Meta<typeof GridCard>;

const CustomButton = <Button onPress={() => alert('Clicked')}>Custom</Button>;

const Template: StoryFn<typeof GridCard> = args => {
  return (
    <GridCard
      {...args}
      imageAlt={'Storybook mock image'}
      imageSrc={'https://picsum.photos/200/500'}
      children={<>Empty</>}
    />
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
