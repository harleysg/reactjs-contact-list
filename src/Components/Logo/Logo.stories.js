import * as  React from 'react'
import Logo from "./index"

const storie = {
  title:'Components/Logo',
  component: Logo,
  argTypes: {
      size: {
        control:'number',
        defaultValue: 4,
        table: {
          type: {
              summary: 'Define size brand'
          },
          defaultValue: { summary: '4' }
        }
      }
  }
}

const Template = (args) => <Logo {...args}/>

export const BrandLogo = Template.bind({})

export default storie
