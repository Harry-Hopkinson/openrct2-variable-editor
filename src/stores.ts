import { store } from "openrct2-flexui";

let parkEntranceFee = store(`${park.entranceFee}`);
let parkCash = store(`${park.cash / 10}`);

export { parkEntranceFee, parkCash };
