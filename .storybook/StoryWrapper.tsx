import React from 'react';

import { Base } from '../src';

import './storybook-preview.scss';

export const StoryWrapper = ({ children }) => <Base className="storybook-wrapper">{children}</Base>;

export default StoryWrapper;
