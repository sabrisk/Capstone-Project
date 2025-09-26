import type { NextApiRequest, NextApiResponse } from "next";

// Fake in-memory database
let people = [
	{ name: "Robert" },
	{ name: "Pamela" },
	{ name: "Javi" },
	{ name: "Harley" },
	{ name: "Mom" },
	{ name: "Dad" },
	{ name: "Jared" },
	{ name: "Jaimee" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "GET":
			res.status(200).json(people);
			break;
		default:
			res.setHeader("Allow", ["GET", "POST", "PATCH", "DELETE"]);
			res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
