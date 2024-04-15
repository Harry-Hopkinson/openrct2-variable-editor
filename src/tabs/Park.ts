import {
  groupbox,
  tab,
  LayoutDirection,
  label,
  textbox,
  TabCreator,
} from "openrct2-flexui";
import { parkEntranceFee, parkCash, parkRating, bankLoan } from "../stores";

export function ParkTab(): TabCreator {
  return tab({
    image: {
      frameBase: 5466,
      frameCount: 1,
      frameDuration: 1,
    },
    content: [
      groupbox({
        text: "Park Variables",
        direction: LayoutDirection.Horizontal,
        content: [
          label({
            text: "Park Entrance Fee",
            alignment: "left",
          }),
          textbox({
            text: parkEntranceFee,
            width: 50,
            tooltip: "The amount of money the park charges for entrance.",
            onChange: (text: string) => {
              park.entranceFee = parseFloat(text) * 10;
            },
          }),
          label({
            text: "Park Cash",
            alignment: "centred",
          }),
          textbox({
            text: parkCash,
            tooltip: "The amount of money the park has.",
            width: 75,
            onChange: (text: string) => {
              park.cash = parseFloat(text) * 10;
            },
          }),
        ],
      }),
      groupbox({
        direction: LayoutDirection.Horizontal,
        content: [
          label({
            text: "Park Rating",
            alignment: "left",
          }),
          textbox({
            text: parkRating,
            width: 50,
            tooltip: "The rating of the park.",
            onChange: (text: string) => {
              park.rating = parseFloat(text);
            },
          }),
          label({
            text: "Bank Loan",
            alignment: "centred",
          }),
          textbox({
            text: bankLoan,
            tooltip: "The amount of money the park has borrowed.",
            width: 75,
            onChange: (text: string) => {
              park.bankLoan = parseFloat(text) * 10;
            },
          }),
        ],
      }),
    ],
  });
}
