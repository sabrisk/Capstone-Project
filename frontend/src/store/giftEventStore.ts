import { create } from "zustand";
import { GiftEvent } from "../types";

type GiftEventStore = {
	giftEvents: GiftEvent[];
	updateGiftEvents: (updater: (prev: GiftEvent[]) => GiftEvent[]) => void;
};

export const useGiftEventStore = create<GiftEventStore>((set) => ({
	giftEvents: [],
	updateGiftEvents: (updater) =>
		set((state) => ({ giftEvents: updater(state.giftEvents) })),
}));
