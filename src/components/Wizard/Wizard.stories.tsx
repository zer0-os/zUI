import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Wizard } from './';
import { Loading as WizardLoading, Header as WizardHeader, Confirmation as WizardConfirmation } from './Presets';
import { StoryCard } from '../.storybook';

export default {
  title: 'Data Display/Wizard',
  component: Wizard
} as ComponentMeta<typeof Wizard>;

export const Container: ComponentStory<typeof Wizard> = args => (
  <StoryCard isContrast>
    <Wizard {...args}>
      <p style={{ textAlign: 'center' }}>
        You can put any content in this container, and it will apply Wizard styling!
      </p>
    </Wizard>
  </StoryCard>
);

export const Loading: ComponentStory<typeof WizardLoading> = args => (
  <StoryCard isContrast>
    <WizardLoading {...args} />
  </StoryCard>
);

Loading.args = {
  message: 'Loading...'
};

export const Header: ComponentStory<typeof WizardHeader> = args => (
  <StoryCard isContrast>
    <Wizard {...args}>{''}</Wizard>
  </StoryCard>
);

Header.args = {
  header: 'Wizard Header Goes Here',
  headerInfo: 'Create a token currency for a domain or DAO. The standard is the ERC-20 token standard.',
  subHeader: 'Some additional info as a subheader',
  sectionDivider: true
};

export const Confirmation: ComponentStory<typeof WizardConfirmation> = args => (
  <StoryCard isContrast>
    <Wizard>
      <WizardConfirmation {...args} />
    </Wizard>
  </StoryCard>
);

Confirmation.args = {
  message: 'Some confirmation text',
  isPrimaryButtonActive: true,
  isSecondaryButtonActive: true,
  onClickPrimaryButton: () => alert('Clicked confirm'),
  onClickSecondaryButton: () => alert('Clicked cancel')
};
