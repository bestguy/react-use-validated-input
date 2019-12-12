import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import pkg from '../package.json';

addParameters({
  options: {
    name: `react-use-validated-input ${pkg.version}`,
    url: 'https://github.com/bestguy/react-use-validated-input',
    showPanel: false
  }
});

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

addDecorator(story => (
  <div className="container mt-5">
    {story()}
  </div>
));