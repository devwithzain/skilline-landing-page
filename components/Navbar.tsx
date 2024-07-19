import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { logo } from "@/public";
import { motion } from "framer-motion";
import { navbarItem } from "@/constant";
import { navbarVarients } from "@/motion";

export default function Navbar() {
	return (
		<motion.nav
			initial="initial"
			whileInView="animate"
			variants={navbarVarients}
			viewport={{ once: true }}
			className="w-full flex justify-between items-center h-[10vh]">
			<div>
				<Image
					src={logo}
					alt="logo"
					width={100}
					height={100}
					className="w-[120px] h-[120px]"
				/>
			</div>
			<div className="flex gap-16 items-center sm:hidden xm:hidden">
				{navbarItem.map((item) => (
					<ul
						className="flex gap-4"
						key={item.id}>
						<Link
							className="text-[18px] text-[#252641] font-medium"
							href={item.href}>
							{item.title}
						</Link>
					</ul>
				))}
				<div className="flex gap-4">
					<Button
						title="Login"
						className="text-[#252641] bg-white px-[20px] py-[5px]"
					/>
					<Button
						title="Sign up"
						className="bg-[#F48C06] text-white px-[20px] py-[5px]"
					/>
				</div>
			</div>
		</motion.nav>
	);
}
