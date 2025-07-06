import React from "react";
import ListGrid from "../components/ListGrid";
import BackButton from "../components/BackButton";
import GridContainer from "../components/GridContainer";

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
		<main className="p-6">
			<nav className="flex justify-end items-start">
				<BackButton />
			</nav>
			<GridContainer title={"People"}>
				<ListGrid items={PEOPLE} variant={"person"} />
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
