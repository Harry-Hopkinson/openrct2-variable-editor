import { store } from "openrct2-flexui";

// Park Variables
let parkEntranceFee = store(`${park.entranceFee}`);
let parkCash = store(`${park.cash / 10}`);
let parkRating = store(`${park.rating}`);
let bankLoan = store(`${park.bankLoan / 10}`);

// Readonly Variables
let guests = store(`${park.guests}`);
let suggestedGuestMaximum = store(`${park.suggestedGuestMaximum}`);
let guestGenerationProbability = store(`${park.guestGenerationProbability}`);
let guestInitialCash = store(`${park.guestInitialCash / 10}`);
let guestInitialHappiness = store(`${park.guestInitialHappiness}`);

export function UpdateStores() {
  parkEntranceFee.set((park.entranceFee / 10).toString());
  parkCash.set((park.cash / 10).toString());
  parkRating.set(park.rating.toString());
  bankLoan.set((park.bankLoan / 10).toString());
  guests.set(park.guests.toString());
  suggestedGuestMaximum.set(park.suggestedGuestMaximum.toString());
  guestGenerationProbability.set(park.guestGenerationProbability.toString());
  guestInitialCash.set((park.guestInitialCash / 10).toString());
  guestInitialHappiness.set(park.guestInitialHappiness.toString());
}

export {
  parkEntranceFee,
  parkCash,
  parkRating,
  bankLoan,
  guests,
  suggestedGuestMaximum,
  guestGenerationProbability,
  guestInitialCash,
  guestInitialHappiness,
};
