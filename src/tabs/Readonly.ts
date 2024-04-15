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
          }),
          label({
            text: guests,
          }),
          label({
            text: "Soft Guest Cap",
            alignment: "left",
          }),
          label({
            text: suggestedGuestMaximum,
          }),
        ],
      }),
      groupbox({
        direction: LayoutDirection.Horizontal,
        content: [
          label({
            text: "Guest Generation Probability",
            alignment: "left",
          }),
          label({
            text: guestGenerationProbability,
          }),
        ],
      }),
    ],
  });
}
