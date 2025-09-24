import GridContainer from "@/components/GridContainer";
import React, { useEffect } from "react";
import ListGrid from "../components/ListGrid";
import { useGiftEventStore } from "@/store/giftEventStore";
import { GiftEvent } from "../types";

type GiftEventStore = {
	giftEvents: GiftEvent[];
	updateGiftEvents: (updater: (prev: GiftEvent[]) => GiftEvent[]) => void;
};

function GiftEvents() {
	const { giftEvents, updateGiftEvents } = useGiftEventStore();

	const GIFT_EVENTS = [
		{
			name: "Robert's birthday party",
			date: "5-25-2025",
			description: "Christmas 2025",
		},
		{
			name: "Thanksgiving 2025",
			date: "12-25-2025",
			description: "Whole family getting together for Christmas",
		},
		{
			name: "Christmas 2025",
			date: "12-25-2025",
			description: "Whole family getting together for Christmas along",
		},
		{
			name: "Rockclimbing at recreational",
			date: "5-25-2025",
			description: "A fun get together with Grandmother at her place in",
		},
		{
			name: "Christmas 2025",
			date: "12-25-2025",
			description: "Whole family getting together for Christmas along",
		},
		{
			name: "Christmas 2025",
			date: "12-25-2025",
			description: "Whole family getting together for Christmas along",
		},
	];

	useEffect(() => {
		updateGiftEvents(() => GIFT_EVENTS);
	}, []);

	const anEvent = {
		name: "Christmas 2025",
		date: "12-25-2025",
		description: "Whole family getting together for Christmas along",
	};
	const handleClick = () => {
		updateGiftEvents((prev) => [...prev, anEvent]);
	};

	return (
		<main className="p-6">
			{/* <header className="flex flex-col items-center mb-16">
				<h1 className="text-4xl font-bold">I Want That!</h1>
			</header> */}
			<GridContainer // title={"People"}
				title={"Events"}
				description={"Select or add event below"}
			>
				<ListGrid items={giftEvents} variant={"person"} />
			</GridContainer>

			<button
				onClick={handleClick}
				className="md:hidden fixed bottom-7 right-7 w-16 h-16 bg-gray-600 text-white text-4xl border border-slate-600 rounded-full flex items-center justify-center  hover:bg-gray-500 transition-colors"
				aria-label="Add Event"
			>
				+
			</button>
		</main>
	);
}

export default GiftEvents;
