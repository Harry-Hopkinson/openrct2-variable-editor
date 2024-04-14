import { tab, label, TabCreator } from "openrct2-flexui";

export function StatsTab(): TabCreator {
  return tab({
    image: "sort",
    content: [
      label({
        text: "Stats Variables",
        alignment: "centred",
      }),
    ],
  });
}
