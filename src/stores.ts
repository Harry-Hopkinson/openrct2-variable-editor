import { store } from "openrct2-flexui";

// Park Variables
let parkEntranceFee = store(`${park.entranceFee}`);
let parkCash = store(`${park.cash / 10}`);
let parkRating = store(`${park.rating}`);
let bankLoan = store(`${park.bankLoan / 10}`);

// Readonly Variables
let guests = store(`${park.guests}`);

export { parkEntranceFee, parkCash, parkRating, bankLoan, guests };
