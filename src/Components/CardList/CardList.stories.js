import * as React from "react"
import { withKnobs } from "@storybook/addon-knobs";
import { Provider } from "react-redux";
import store from "../../Redux/Store";

import CardList from "./index"

const storie = {
  title: "Components/CardList",
  component: CardList,
  argTypes: { },
  decorator: [withKnobs, story => <Provider store={store}>{story()}</Provider>],
}

const Template = (args) => <Provider store={store}><CardList {...args} /></Provider>

export const CardListComponent = Template.bind({})

CardListComponent.args = {
  data: [{
    active: true,
    favorite: false,
    id: 1, 
    email: "email", 
    first_name: "Nombre",
    last_name: "Apellido",
    avatar: null,
    full_name: "Nombre Apellido",
  }]
}

export default storie