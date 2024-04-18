import { store } from "openrct2-flexui";

// Park Variables
let parkValue = store(`${park.value}`);
let parkCash = store(`${park.cash / 10}`);
let parkRating = store(`${park.rating}`);
let bankLoan = store(`${park.bankLoan / 10}`);
let parkEntranceFee = store(`${park.entranceFee}`);

// Readonly Variables
let guests = store(`${park.guests}`);
let suggestedGuestMaximum = store(`${park.suggestedGuestMaximum}`);
let guestGenerationProbability = store(`${park.guestGenerationProbability}`);
let guestInitialCash = store(`${park.guestInitialCash / 10}`);
let guestInitialHappiness = store(`${park.guestInitialHappiness}`);
let guestInitialHunger = store(`${park.guestInitialHunger}`);
let guestInitialThirst = store(`${park.guestInitialThirst}`);

export function UpdateStores() {
  parkValue.set(park.value.toString());
  parkCash.set((park.cash / 10).toString());
  parkRating.set(park.rating.toString());
  bankLoan.set((park.bankLoan / 10).toString());
  parkEntranceFee.set((park.entranceFee / 10).toString());
  guests.set(park.guests.toString());
  suggestedGuestMaximum.set(park.suggestedGuestMaximum.toString());
  guestGenerationProbability.set(park.guestGenerationProbability.toString());
  guestInitialCash.set((park.guestInitialCash / 10).toString());
  guestInitialHappiness.set(park.guestInitialHappiness.toString());
  guestInitialHunger.set(park.guestInitialHunger.toString());
  guestInitialThirst.set(park.guestInitialThirst.toString());
}

export {
  parkValue,
  parkCash,
  parkRating,
  bankLoan,
  parkEntranceFee,
  guests,
  suggestedGuestMaximum,
  guestGenerationProbability,
  guestInitialCash,
  guestInitialHappiness,
  guestInitialHunger,
  guestInitialThirst,
};
