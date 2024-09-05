import { PrismaClient } from "@repo/db/client";

const func = async () => {
	console.log(PrismaClient);

	const client = new PrismaClient();

	const res = await client.user.create({
		data: {
			email: "sfadsa",
			name: "sfda",
		},
	});
	console.log(res);
};

export default async function Home() {
	await func();
	console.log("hi");

	return <div className="font-bold text-6xl underline">user app</div>;
}
