import { tab, label, TabCreator } from "openrct2-flexui";

export function ReadOnlyTab(): TabCreator {
  return tab({
    image: "view",
    content: [
      label({
        text: "Readonly Variables",
        alignment: "centred",
      }),
    ],
  });
}
