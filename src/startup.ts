import { box, tab, label, tabwindow } from "openrct2-flexui";

export const allWidgets = tabwindow({
  title: "OpenRCT2 Variable Editor",
  width: {
    value: 350,
    min: 150,
    max: 10_000,
  },
  height: {
    value: 400,
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
        label({
          text: "Park Variables",
          alignment: "centred",
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
  }
}
