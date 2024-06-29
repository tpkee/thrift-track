import type { Meta, StoryObj } from "@storybook/react";

import { NextIntlClientProvider } from "next-intl";

import messages from "@/locales/en.json";
import ItemDropdown from ".";

const meta = {
  component: ItemDropdown,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "centered",
    backgrounds: {
      default: "black",
      values: [
        {
          name: "black",
          value: "#000",
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
} satisfies Meta<typeof ItemDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    label: "Option element 1",
    selected: false,
    disabled: false,
  },
} satisfies Story;

export const WithIcon = {
  args: {
    label: "Option element 1",
    selected: false,
    disabled: false,
    icon: "🥹",
  },
} satisfies Story;

export const DefaultSelected = {
  args: {
    label: "Option element 1",
    selected: true,
    disabled: true,
  },
} satisfies Story;

export const WithIconSelected = {
  args: {
    label: "Option element 1",
    selected: true,
    disabled: true,
    icon: "🥹",
  },
} satisfies Story;
