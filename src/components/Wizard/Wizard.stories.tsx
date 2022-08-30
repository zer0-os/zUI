import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Wizard } from './';
import { StoryCard } from '../.storybook';

export default {
  title: 'Data Display/Wizard',
  component: Wizard.Container
} as ComponentMeta<typeof Wizard.Container>;

export const Container: ComponentStory<typeof Wizard.Container> = args => (
  <StoryCard>
    <Wizard.Container {...args}>
      <p style={{ textAlign: 'center' }}>
        You can put any content in this container, and it will apply Wizard styling!
      </p>
    </Wizard.Container>
  </StoryCard>
);

export const Loading: ComponentStory<typeof Wizard.Loading> = args => (
  <StoryCard>
    <Wizard.Loading {...args} />
  </StoryCard>
);

Loading.args = {
  message: 'Loading...'
};

export const Header: ComponentStory<typeof Wizard.Header> = args => (
  <StoryCard>
    <Wizard.Container>
      <Wizard.Header {...args} />
    </Wizard.Container>
  </StoryCard>
);

Header.args = {
  header: 'Wizard Header Goes Here',
  subHeader: 'Some additional info as a subheader',
  sectionDivider: true
};

export const Confirmation: ComponentStory<typeof Wizard.Confirmation> = args => (
  <StoryCard>
    <Wizard.Container>
      <Wizard.Confirmation {...args} />
    </Wizard.Container>
  </StoryCard>
);

Confirmation.args = {
  message: 'Some confirmation text',
  isPrimaryButtonActive: true,
  isSecondaryButtonActive: true,
  onClickPrimaryButton: () => alert('Clicked confirm'),
  onClickSecondaryButton: () => alert('Clicked cancel')
};
