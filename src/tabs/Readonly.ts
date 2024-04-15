import {
  tab,
  TabCreator,
  groupbox,
  LayoutDirection,
  label,
} from "openrct2-flexui";
import { guests, suggestedGuestMaximum } from "../stores";

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
    ],
  });
}
