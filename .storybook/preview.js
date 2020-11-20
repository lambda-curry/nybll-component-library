import React from 'react';
import { addDecorator } from '@storybook/react';
import StorybookWrapper from './StoryWrapper';

addDecorator(storyFn => <StorybookWrapper>{storyFn()}</StorybookWrapper>);

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
