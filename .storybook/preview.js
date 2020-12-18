import React from "react";

import { MemoryRouter } from 'react-router-dom';
import { addDecorator } from "@storybook/react";

import Styles from "../src/assets/styles";

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
addDecorator(story => <MemoryRouter initialEntries={['/contacts']}>{story()}</MemoryRouter>);
addDecorator(story => <MemoryRouter initialEntries={['/favorites']}>{story()}</MemoryRouter>);
addDecorator(story => <><Styles />{story()}</>); // Set globalStyles into StoryBooks

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  layout: "centered"
}