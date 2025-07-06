import React from "react";

type GridContainerProps = {
	title: String;
	children?: React.ReactNode;
};

function GridContainer({ children, title }: GridContainerProps) {
	return (
		<section className="max-w-6xl mx-auto px-8 mt-16">
			<h2 className="text-2xl text-gray-400 mb-6 font-bold ">{title}</h2>
			{children}
		</section>
	);
}

export default GridContainer;
