import { store } from "openrct2-flexui";

let parkEntranceFee = store(`${park.entranceFee}`);
let parkCash = store(`${park.cash / 10}`);
let parkRating = store(`${park.rating}`);
let bankLoan = store(`${park.bankLoan / 10}`);

export { parkEntranceFee, parkCash, parkRating, bankLoan };
