import React from "react";
import { ComponentMeta, ComponentStory} from '@storybook/react';
import Button from "./Button";
import Center from "../Center/Center";

export default {
    title: 'Form/Button',
    component: Button,
    // decorators: [story => <Center>{story()}</Center>]
} as ComponentMeta<typeof Button>

export const Primary = ():JSX.Element => <Button variant="primary">Primary</Button>
export const Secondary = ():JSX.Element =><Button variant="secondary">Secondary</Button>
export const Success = ():JSX.Element =><Button variant="success">Success</Button>
export const Danger = ():JSX.Element =><Button variant="danger">Danger</Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    children: 'Secondary Args'
}