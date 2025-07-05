import React from "react";
import ListGrid from "../components/ListGrid";

function People() {
	const PEOPLE = [
		{ name: "Brock" },
		{ name: "Pamela" },
		{ name: "Mom" },
		{ name: "Dad" },
		{ name: "Jared" },
		{ name: "Jaimee" },
		{ name: "Javi" },
	];
	return (
		<div className="p-6">
			<header className="flex justify-end items-start">
				<button
					className="fixed top-0 left-0 w-12 h-12 pb-1 bg-gray-600 text-white text-4xl border border-slate-600 flex items-center justify-center  hover:bg-gray-500 transition-colors"
					aria-label="Back"
				>
					&lsaquo;
				</button>
			</header>
			<div className="max-w-6xl mx-auto px-8 mt-24">
				<section>
					<h2 className="text-2xl text-gray-400 mb-6 font-bold ">
						People
					</h2>
				</section>
				<ListGrid items={PEOPLE} variant={"person"} />
			</div>
			<footer className="flex justify-end items-end">
				<button
					className="fixed bottom-7 right-7 w-16 h-16 bg-gray-600 text-white text-4xl border border-slate-600 rounded-full flex items-center justify-center  hover:bg-gray-500 transition-colors"
					aria-label="Add Event"
				>
					+
				</button>
			</footer>
		</div>
	);
}

export default People;
