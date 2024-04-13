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
      image: "path_surfaces",
      content: [
        label({
          text: "Select a plugin to view more information",
          alignment: "centred",
        }),
      ],
    }),
    tab({
      image: "simulate",
      content: [
        label({
          text: "Ride Variables",
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
