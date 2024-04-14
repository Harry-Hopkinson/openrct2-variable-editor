import {
  tab,
  label,
  tabwindow,
  groupbox,
  LayoutDirection,
  textbox,
} from "openrct2-flexui";
import { parkEntranceFee, parkCash } from "./stores";

export const allWidgets = tabwindow({
  title: "OpenRCT2 Variable Editor",
  width: {
    value: 350,
    min: 150,
    max: 10_000,
  },
  height: {
    value: 350,
    min: 150,
    max: 10_000,
  },
  tabs: [
    tab({
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
              alignment: "centred",
            }),
            textbox({
              text: parkEntranceFee,
              width: 50,
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
              width: 75,
              onChange: (text: string) => {
                park.cash = parseFloat(text) * 10;
              },
            }),
          ],
        }),
      ],
    }),
    tab({
      image: "ride_stations",
      content: [
        label({
          text: "Ride Variables",
          alignment: "centred",
        }),
      ],
    }),
    tab({
      image: "sort",
      content: [
        label({
          text: "Stats Variables",
          alignment: "centred",
        }),
      ],
    }),
  ],
});

export function startup() {
  if (typeof ui !== "undefined") {
    const menuItemName = "Variable Editor";
    ui.registerMenuItem(menuItemName, () => allWidgets.open());
    context.subscribe("interval.day", () => {
      parkEntranceFee.set((park.entranceFee / 10).toString());
      parkCash.set((park.cash / 10).toString());
    });
  }
}
