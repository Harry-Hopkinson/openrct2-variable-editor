import { store } from "openrct2-flexui";

let parkEntranceFee = store(`${park.entranceFee}`);
let parkCash = store(`${park.cash}`);

export { parkEntranceFee, parkCash };
