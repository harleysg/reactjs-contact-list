import * as React from "react"
import Button from "./index"

const storie = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    icon: {
      defaultvalue: "love",
      control: {
        type: 'select',
        options: [
          'love', 
          'add', 
          'close',
          'trash',
        ],
      },
      table: {
        type: {
          summary: ".",
        },
        defaultvalue: { summary: "love" },
      }
    },
  }
}

const Template = (args) => <Button {...args} />

export const ButtonLabel = Template.bind({})
export const ButtonIcon = Template.bind({})
export const ButtonIconLabel = Template.bind({})

ButtonLabel.args = {
  label: "Button default"
}
ButtonIcon.args = {
  icon: "love"
}
ButtonIconLabel.args = {
  icon: "add",
  label: "new"
}

export default storie