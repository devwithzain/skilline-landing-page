import "@/styles/globals.css";
export const metadata = {
	title: "Skilline Landing Page",
	description: "Skilline Landing Page Created by Zain Ali",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
