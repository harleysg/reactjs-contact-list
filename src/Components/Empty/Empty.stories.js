import * as React from "react"
import { Empty } from "./index"

const storie = {
  title: "Components/Empty",
  component: Empty,
  argTypes: { }
}

const Template = (args) => <Empty {...args} />

export const EmptyComponent = Template.bind({})
export default storie