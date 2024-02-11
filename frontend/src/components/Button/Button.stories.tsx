import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";
import { NextIntlClientProvider } from "next-intl";

import messages from "@/locales/en.json";

const meta = {
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    children: "Click me",
    variant: "primary",
    loading: false, // FIXME: currently there is a bug with the svg imports in storybook, so if this is set to true the story will throw an error
    disabled: false,
  },
} satisfies Story;
