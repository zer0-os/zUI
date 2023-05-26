import React from 'react';

import { Table, HeaderGroup, Header, Body, Cell } from '.';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Data Display/Table',
  component: Table
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => {
  return (
    <Table {...args}>
      <HeaderGroup>
        <Header alignment="left">Header 1</Header>
        <Header alignment="right">Header 2</Header>
        <Header alignment="right">Header 3</Header>
      </HeaderGroup>
      <Body>
        <tr>
          <Cell alignment="left">Row 1, Column 1</Cell>
          <Cell alignment="right">Row 1, Column 2</Cell>
          <Cell alignment="right">Row 1, Column 3</Cell>
        </tr>
        <tr>
          <Cell alignment="left">Row 2, Column 1</Cell>
          <Cell alignment="right">Row 2, Column 2</Cell>
          <Cell alignment="right">Row 2, Column 3</Cell>
        </tr>
        <tr>
          <Cell alignment="left">Row 3, Column 1</Cell>
          <Cell alignment="right">Row 3, Column 2</Cell>
          <Cell alignment="right">Row 3, Column 3</Cell>
        </tr>
      </Body>
    </Table>
  );
};

export const BasicTable = Template.bind({});
BasicTable.args = {};
