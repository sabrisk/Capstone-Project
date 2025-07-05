import React from "react";
import ListItem from "../components/ListItem";
import { v4 as uuid } from "uuid";

type Person = {
	name: string;
};

type GiftEvent = {
	name: string;
	date?: string;
	description?: string;
};

type Variant = "person" | "gift-event";

type ListGridProps = {
	items: Array<Person | GiftEvent>;
	variant: Variant;
};

function ListGrid({ items, variant }: ListGridProps) {
	return (
		<main className=" grid gap-4 py-4 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3">
			{items.map((item) => (
				<ListItem key={uuid()} {...item} variant={variant} /> //move uuid creation to storing in state/db
			))}
		</main>
	);
}

export default ListGrid;
