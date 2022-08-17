import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Wizard from './';
import { StoryCard } from '../.storybook';

export default {
  title: 'Data Display/Wizard',
  component: Wizard.Container
} as ComponentMeta<typeof Wizard.Container>;

export const Container: ComponentStory<typeof Wizard.Container> = args => (
  <StoryCard isContrast>
    <Wizard.Container {...args}>
      <p style={{ textAlign: 'center' }}>
        You can put any content in this container, and it will apply Wizard styling!
      </p>
    </Wizard.Container>
  </StoryCard>
);

export const Loading: ComponentStory<typeof Wizard.Loading> = args => (
  <StoryCard isContrast>
    <Wizard.Loading {...args}>
      <p style={{ textAlign: 'center' }}>
        You can put any content in this container, and it will apply Wizard styling!
      </p>
    </Wizard.Loading>
  </StoryCard>
);

export const Header: ComponentStory<typeof Wizard.Header> = args => (
  <StoryCard isContrast>
    <Wizard.Container>
      <Wizard.Header {...args} header={'Wizard Header Goes Here'} subHeader={'Some additional info as a subheader'} />
    </Wizard.Container>
  </StoryCard>
);

export const Confirmation: ComponentStory<typeof Wizard.Confirmation> = args => (
  <StoryCard isContrast>
    <Wizard.Container>
      <Wizard.Confirmation
        {...args}
        message={'Some confirmation text'}
        isPrimaryButtonActive
        isSecondaryButtonActive
        onClickPrimaryButton={() => alert('Clicked confirm')}
        onClickSecondaryButton={() => alert('Clicked cancel')}
      />
    </Wizard.Container>
  </StoryCard>
);
