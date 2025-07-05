import React from "react";
import ListGrid from "../components/ListGrid";

function GiftEvents() {
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
	return (
		<div className="p-6">
			<header className="flex flex-col items-center">
				<h1 className="text-4xl mt-2 mb-12 font-bold">I Want That!</h1>
			</header>
			<div className="max-w-6xl mx-auto px-8">
				<section>
					<h2 className="text-2xl text-gray-400 mb-6 font-bold ">
						Events
					</h2>
				</section>
				<ListGrid items={GIFT_EVENTS} variant={"gift-event"} />
			</div>
			<footer className="md:hidden flex justify-end items-end md:justify-center md:items-center">
				<button
					className="fixed bottom-7 right-7 w-16 h-16 bg-gray-600 text-white text-4xl border border-slate-600 rounded-full flex items-center justify-center  hover:bg-gray-500 transition-colors md:bottom-4 md:left-1/2 md:-translate-x-1/2"
					aria-label="Add Event"
				>
					+
				</button>
			</footer>
		</div>
	);
}

export default GiftEvents;
