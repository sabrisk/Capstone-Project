import React from "react";
import ListItem from "../components/ListItem";
import { v4 as uuid } from "uuid";
import { GiftEvent } from "@/types";

type Person = {
	name: string;
};

type Variant = "person" | "gift-event";

type ListGridProps = {
	items: Array<Person | GiftEvent>;
	variant: Variant;
};

function ListGrid({ items, variant }: ListGridProps) {
	return (
		<main className="grid gap-4 py-4 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3">
			{items.map((item) => (
				<ListItem key={uuid()} {...item} variant={variant} /> //move uuid creation to storing in state/db
			))}
		</main>
	);
}

export default ListGrid;
