import { configureStore } from "@reduxjs/toolkit";

import giftEventsReducer from "../features/GiftEvents/GiftEventsSlice";
// import spacecraftsReducer from "../features/spacecrafts/spacecraftsSlice";
// import planetsReducer from "../features/planets/planetsSlice";

export const store = configureStore({
	reducer: {
		giftEvents: giftEventsReducer,
		// spacecrafts: spacecraftsReducer,
		// planets: planetsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // <- this is key
