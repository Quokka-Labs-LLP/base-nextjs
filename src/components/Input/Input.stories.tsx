import React from "react";
import Input from "./Input";

export default {
    title: 'Form/Input',
    component: Input,
    decorators: []
}

export const Small = (): JSX.Element => <Input size="small" placeholder="Small size" />
export const Medium = (): JSX.Element => <Input size="medium" placeholder="Medium size" />
export const Large = (): JSX.Element => <Input size="large" placeholder="Large size" />

Small.storyName = 'Small Input'