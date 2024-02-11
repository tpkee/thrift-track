import type { Meta, StoryObj } from "@storybook/react";

import Input from ".";
import { NextIntlClientProvider } from "next-intl";

import messages from "@/locales/en.json";

const meta = {
  component: Input,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    value: "Hello there!",
    placeholder: "Type here...",
    variant: "primary",
    error: "",
    disabled: false,
  },
} satisfies Story;

export const PrimaryIconLeft = {
  args: {
    value: "Hello there!",
    placeholder: "Type here...",
    variant: "primary",
    left: <span>👋</span>,
    error: "",
    disabled: false,
  },
} satisfies Story;

export const PrimaryIconRight = {
  args: {
    value: "Hello there!",
    placeholder: "Type here...",
    variant: "primary",
    right: <span>&euro;</span>,
    error: "",
    disabled: false,
  },
} satisfies Story;

export const PrimaryIconsBoth = {
  args: {
    value: "Hello there!",
    placeholder: "Type here...",
    variant: "primary",
    right: <span>&euro;</span>,
    left: <span>👋</span>,
    error: "",
    disabled: false,
  },
} satisfies Story;
