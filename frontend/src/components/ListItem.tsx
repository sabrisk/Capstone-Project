import React from "react";

type Variant = "person" | "gift-event";

type ListItemProps = {
	name: string;
	date?: string;
	description?: string;
	variant: Variant;
};

function ListItem({ name, date, description, variant }: ListItemProps) {
	return (
		<div className="group cursor-pointer justify-start flex flex-col text-2xl bg-gray-700  rounded border border-slate-600">
			<div className="group-hover:underline p-3 md:border-b md:border-slate-600">
				{name}
			</div>
			{/* <span className="md:text-lg hidden md:block">{`${date}`}</span> */}
			{variant === "gift-event" && (
				<div
					className={`md:text-base hidden md:flex hover:no-underline items-center p-7 flex-1 bg-gray-800`}
				>
					{description}
				</div>
			)}
		</div>
	);
}

export default ListItem;
