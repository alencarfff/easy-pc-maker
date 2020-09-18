import React from "react";
import Card from "components/Card";
import {Story} from "@storybook/react";
import {ICard} from "models/ICard";
import {docStory } from "./docStory";
import {action} from '@storybook/addon-actions'

export default {
  title: "Components/Button",
  component: Card,
};

const Template: Story<ICard> = (args) => <Card {...args} />;

export const Default = docStory(Template, {
    description: '',
    imageUrl: '',
    onClick: action('clicked')
}, '');