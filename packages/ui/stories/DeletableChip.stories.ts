import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import React from "react";
import DeletableChip from "../components/chips/DeletableChip";
import { IDeletableChip } from "../models/interfaces";

const meta = {
  title: "Components/DeletableChip",
  component: DeletableChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    key: {
      control: "text",
      description: "Unique identifier for the chip",
    },
    label: {
      control: "text",
      description: "The label to display on the chip",
    },
    tooltip: {
      control: "text",
      description: "Optional tooltip text for the chip",
    },
    onDelete: {
      action: "deleted",
      description: "Callback function when the chip is deleted",
    },
  },
  args: {
    onDelete: fn(),
  },
} satisfies Meta<typeof DeletableChip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic deletable chip without tooltip
export const Default: Story = {
  args: {
    key: "chip-1",
    label: "Basic Chip",
    onDelete: fn(),
  },
};

// Deletable chip with tooltip
export const WithTooltip: Story = {
  args: {
    key: "chip-2",
    label: "Chip with Tooltip",
    tooltip: "This is a helpful tooltip for the chip",
    onDelete: fn(),
  },
};

// Multiple chips with different labels
export const MultipleChips: Story = {
  args: {
    key: "chip-3",
    label: "React",
    onDelete: fn(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "This shows a single chip. You can add multiple chips by using the same component multiple times in your application.",
      },
    },
  },
};

// Chip with long label
export const LongLabel: Story = {
  args: {
    key: "chip-7",
    label: "This is a very long chip label that might wrap to multiple lines",
    tooltip: "Long labels are handled gracefully",
    onDelete: fn(),
  },
};

// Chip with special characters
export const SpecialCharacters: Story = {
  args: {
    key: "chip-8",
    label: "Chip with @#$%^&*()",
    tooltip: "Special characters are supported",
    onDelete: fn(),
  },
};

// Interactive example showing delete functionality
export const Interactive: Story = {
  args: {
    key: "interactive-chip",
    label: "Click to delete",
    tooltip: "This chip can be deleted by clicking the X button",
    onDelete: fn(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "This chip demonstrates the delete functionality. Click the X button to trigger the onDelete callback.",
      },
    },
  },
};
