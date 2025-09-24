import React from "react";

type GridContainerProps = {
	title: String;
	// eventName: String;
	description: String;
	children?: React.ReactNode;
};

function GridContainer({ children, title, description }: GridContainerProps) {
	return (
		<section className="max-w-6xl mx-auto px-8 mt-16">
			<div className=" mb-7 pb-5  ">
				<h1 className="mb-4 font-bold text-4xl">{title}</h1>
				<h3 className="text-lg">{description}</h3>
			</div>
			{/* <h2 className="text-2xl text-gray-400 mb-6 font-bold">{title}</h2> */}
			<button className="bg-[#F5EFE7] text-[#313131] font-bold border-1 rounded border-[#F5EFE7] px-2 ">
				Add Person
			</button>
			{children}
		</section>
	);
}

export default GridContainer;
