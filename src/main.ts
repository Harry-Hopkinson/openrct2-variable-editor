import { tabwindow } from "openrct2-flexui";
import { parkEntranceFee, parkCash } from "./stores";
import { ParkTab } from "./tabs/Park";
import { RideTab } from "./tabs/Ride";
import { StatsTab } from "./tabs/Stats";

export const AllWidgets = tabwindow({
  title: "OpenRCT2 Variable Editor",
  width: {
    value: 400,
    min: 150,
    max: 10_000,
  },
  height: {
    value: 350,
    min: 150,
    max: 10_000,
  },
  tabs: [ParkTab(), RideTab(), StatsTab()],
});

export function Main() {
  if (typeof ui !== "undefined") {
    const menuItemName = "Variable Editor";
    ui.registerMenuItem(menuItemName, () => AllWidgets.open());
    context.subscribe("interval.day", () => {
      parkEntranceFee.set((park.entranceFee / 10).toString());
      parkCash.set((park.cash / 10).toString());
    });
  }
}
