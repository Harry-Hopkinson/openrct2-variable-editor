import { tab, label, TabCreator } from "openrct2-flexui";

export function RideTab(): TabCreator {
  return tab({
    image: "ride_stations",
    content: [
      label({
        text: "Ride Variables",
        alignment: "centred",
      }),
    ],
  });
}
