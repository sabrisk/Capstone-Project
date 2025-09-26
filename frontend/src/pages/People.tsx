import React from "react";
import ListGrid from "../components/ListGrid";
import BackButton from "../components/BackButton";
import GridContainer from "../components/GridContainer";

function People() {
	const PEOPLE = [
		{ name: "Robert" },
		{ name: "Pamela" },
		{ name: "Mom" },
		{ name: "Dad" },
		{ name: "Jared" },
		{ name: "Jaimee" },
		{ name: "Javi" },
	];
	return (
		<main className="p-6">
			<nav className="flex justify-end items-start">
				<BackButton />
			</nav>

			<GridContainer
				// title={"People"}
				title={"Christmas 2025"}
				description={"Whole family getting together for Christmas"}
				variant={"person"}
			>
				<ListGrid items={PEOPLE} />
			</GridContainer>
			<button
				className="md:hidden fixed bottom-7 right-7 w-16 h-16 bg-gray-600 text-white text-4xl border border-slate-600 rounded-full flex items-center justify-center  hover:bg-gray-500 transition-colors"
				aria-label="Add Event"
			>
				+
			</button>
		</main>
	);
}

export default People;
