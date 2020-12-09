import * as React from "react"
import Avatar from "./index"

import defaultSrc from "../../assets/images/profile-default.png"

const storie = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    active: {
      control: "boolean",
      defaultvalue: false,
      table: {
        type: {
          summary: "Show is Avatar is selected like favorite or not.",
        },
        defaultvalue: { summary: "false" },
      }
    },
  }
}

const Template = (args) => <Avatar {...args} />

export const AvatarImage = Template.bind({})

AvatarImage.args = {
  src: defaultSrc,
  alt: "Images default"
}

export default storie