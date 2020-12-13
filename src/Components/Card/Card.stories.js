import * as React from "react"
import { withKnobs } from "@storybook/addon-knobs";
import { Provider } from "react-redux";
import store from "../../Redux/Store";

import Card from "./index"


// addDecorator(story => <><Provider store={store} />{story()}</>); // Set globalStyles into StoryBooks

const storie = {
  component: Card,
  title: "Components/Card",
  decorator: [withKnobs, story => <Provider store={store}>{story()}</Provider>],
  // argTypes: { },
}
const Template = (args) => <Provider store={store}><Card {...args} /></Provider>

export const CardComponent = Template.bind({})

// const withProvider = (story) => (
//   <Provider store={store}>
//     { story() }
//   </Provider>
// )

// .addDecorator(withProvider)
// const storie = () => storiesOf("Using Storybook").add("Card component", <Card />)
  
export default storie