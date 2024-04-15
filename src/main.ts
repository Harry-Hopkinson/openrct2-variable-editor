import { tabwindow } from "openrct2-flexui";
import { UpdateStores } from "./stores";
import { ParkTab } from "./tabs/Park";
import { RideTab } from "./tabs/Ride";
import { StatsTab } from "./tabs/Stats";
import { ReadOnlyTab } from "./tabs/Readonly";

export const AllWidgets = tabwindow({
  title: "OpenRCT2 Variable Editor",
  width: {
    value: 425,
    min: 425,
    max: 10_000,
  },
  height: {
    value: 350,
    min: 150,
    max: 10_000,
  },
  tabs: [ParkTab(), RideTab(), StatsTab(), ReadOnlyTab()],
});

export function Main() {
  if (typeof ui !== "undefined") {
    const menuItemName = "Variable Editor";
    ui.registerMenuItem(menuItemName, () => AllWidgets.open());
    context.subscribe("interval.day", () => {
      UpdateStores();
    });
  }
}
