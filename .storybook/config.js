import { configure } from '@storybook/react';

function loadStories() {
  require('../src/renderer/stories');
}

configure(loadStories, module);
