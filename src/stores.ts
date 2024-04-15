import { store } from "openrct2-flexui";

// Park Variables
let parkEntranceFee = store(`${park.entranceFee}`);
let parkCash = store(`${park.cash / 10}`);
let parkRating = store(`${park.rating}`);
let bankLoan = store(`${park.bankLoan / 10}`);

// Readonly Variables
let guests = store(`${park.guests}`);
let suggestedGuestMaximum = store(`${park.suggestedGuestMaximum}`);

export function UpdateStores() {
  parkEntranceFee.set((park.entranceFee / 10).toString());
  parkCash.set((park.cash / 10).toString());
  parkRating.set(park.rating.toString());
  bankLoan.set((park.bankLoan / 10).toString());
  guests.set(park.guests.toString());
  suggestedGuestMaximum.set(park.suggestedGuestMaximum.toString());
}

export {
  parkEntranceFee,
  parkCash,
  parkRating,
  bankLoan,
  guests,
  suggestedGuestMaximum,
};
