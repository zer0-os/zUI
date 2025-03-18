import type { Meta, StoryFn } from '@storybook/react';
import { Wizard } from './Wizard';
import type { WizardProps, HeaderProps } from './Wizard';
import type { LoadingProps } from './Presets/Loading';
import type { ConfirmationProps } from './Presets/Confirmation';

export default {
  title: 'Data Display/Wizard',
  component: Wizard.Container
} as Meta<typeof Wizard.Container>;

export const Container: StoryFn<typeof Wizard.Container> = (args: WizardProps) => (
  <Wizard.Container {...args}>
    <p style={{ textAlign: 'center' }}>You can put any content in this container, and it will apply Wizard styling!</p>
  </Wizard.Container>
);

export const Loading: StoryFn<typeof Wizard.Loading> = (args: LoadingProps) => (
  <Wizard.Container>
    <Wizard.Loading {...args} />
  </Wizard.Container>
);

Loading.args = {
  message: 'Loading...'
};

export const Header: StoryFn<typeof Wizard.Header> = (args: HeaderProps) => (
  <Wizard.Container>
    <Wizard.Header {...args} />
  </Wizard.Container>
);

Header.args = {
  header: 'Wizard Header Goes Here',
  headerInfo: 'Create a token currency for a domain or DAO. The standard is the ERC-20 token standard.',
  subHeader: 'Some additional info as a subheader',
  sectionDivider: true
};

export const Confirmation: StoryFn<typeof Wizard.Confirmation> = (args: ConfirmationProps) => (
  <Wizard.Container>
    <Wizard.Confirmation {...args} />
  </Wizard.Container>
);

Confirmation.args = {
  message: 'Some confirmation text',
  isPrimaryButtonActive: true,
  isSecondaryButtonActive: true,
  onClickPrimaryButton: () => alert('Clicked confirm'),
  onClickSecondaryButton: () => alert('Clicked cancel')
};
