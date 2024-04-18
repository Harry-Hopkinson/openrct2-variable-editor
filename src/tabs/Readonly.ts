import {
  tab,
  TabCreator,
  groupbox,
  LayoutDirection,
  label,
} from "openrct2-flexui";
import {
  guests,
  suggestedGuestMaximum,
  guestGenerationProbability,
  guestInitialCash,
  guestInitialHappiness,
  guestInitialHunger,
  guestInitialThirst,
} from "../stores";

export function ReadOnlyTab(): TabCreator {
  return tab({
    image: "view",
    content: [
      groupbox({
        text: "Readonly Variables",
        direction: LayoutDirection.Horizontal,
        content: [
          label({
            text: "Guests",
            alignment: "left",
            tooltip: "The number of guests in the park",
          }),
          label({
            text: guests,
            tooltip: "The number of guests in the park",
          }),
          label({
            text: "Soft Guest Cap",
            alignment: "left",
            tooltip: "The maximum number of guests that will spawn naturally",
          }),
          label({
            text: suggestedGuestMaximum,
            tooltip: "The maximum number of guests that will spawn naturally",
          }),
        ],
      }),
      groupbox({
        direction: LayoutDirection.Horizontal,
        content: [
          label({
            text: "Generation Probability",
            alignment: "left",
            tooltip: "The probability of a guest being generated each tick.",
          }),
          label({
            text: guestGenerationProbability,
            tooltip: "The probability of a guest being generated each tick.",
          }),
          label({
            text: "Guest Initial Cash",
            alignment: "left",
            tooltip: "The average amount of cash guests will spawn with.",
          }),
          label({
            text: guestInitialCash,
            tooltip: "The average amount of cash guests will spawn with.",
          }),
        ],
      }),
      groupbox({
        direction: LayoutDirection.Horizontal,
        content: [
          label({
            text: "Guest Initial Happiness",
            alignment: "left",
            tooltip: "The average happiness guests will spawn at out of 255.",
          }),
          label({
            text: guestInitialHappiness,
            tooltip: "The average happiness guests will spawn at out of 255.",
          }),
          label({
            text: "Guest Initial Hunger",
            alignment: "left",
            tooltip: "The average hunger guests will spawn at out of 255.",
          }),
          label({
            text: guestInitialHunger,
            tooltip: "The average hunger guests will spawn at out of 255.",
          }),
        ],
      }),
      groupbox({
        direction: LayoutDirection.Horizontal,
        content: [
          label({
            text: "Guest Initial Thirst",
            alignment: "left",
            tooltip: "The average thirst guests will spawn at out of 255.",
          }),
          label({
            text: guestInitialThirst,
            tooltip: "The average thirst guests will spawn at out of 255.",
          }),
        ],
      }),
    ],
  });
}
