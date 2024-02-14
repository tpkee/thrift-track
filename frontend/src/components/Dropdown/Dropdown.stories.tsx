import type { Meta, StoryObj } from "@storybook/react";

import Dropdown from ".";
import ItemDropdown from "@/components/ItemDropdown";

import { NextIntlClientProvider } from "next-intl";

import messages from "@/locales/en.json";

function getItemsDropdown() {
  return (
    <>
      <ItemDropdown icon="🥹" label="Option element 1" />
      <ItemDropdown icon="🤌" label="Option element 2" selected />
      <ItemDropdown icon="🌚" label="Action 3" />
      <ItemDropdown label="Action 4" />
    </>
  );
}

const meta = {
  component: Dropdown,
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
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    children: getItemsDropdown(),
    open: false,
    className: "w-72",
  },
} satisfies Story;
