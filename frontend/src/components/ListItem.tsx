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
		<div className="flex flex-col justify-start group cursor-pointer text-2xl bg-gray-700 rounded border hover:border-[#F5EFE7] border-slate-600">
			<div className="p-5 flex justify-center flex-col flex-1   md:border-[#3d3d3d]">
				{name}
			</div>
			{/* <span className="md:text-lg hidden md:block">{`${date}`}</span> */}
			{variant === "gift-event" && (
				<div className="hidden md:flex items-center p-7 flex-1 bg-[#1e1e1e]  md:text-base hover:no-underline">
					{description}
				</div>
			)}
		</div>
	);
}

export default ListItem;
