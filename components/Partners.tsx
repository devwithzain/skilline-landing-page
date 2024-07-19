import Image from "next/image";
import { motion } from "framer-motion";
import { partnersItem } from "@/constant";
import { partnerVarients } from "@/motion";

export default function Partners() {
	return (
		<div className="w-full flex flex-col items-center gap-10 justify-center padding-y padding-x">
			<motion.h1 className="paragraph font-medium text-[#696984]">
				Trusted by 5,000+ Companies Worldwide
			</motion.h1>
			<div className="w-full justify-center gap-10 flex flex-wrap">
				{partnersItem.map((item, i) => (
					<motion.div
						initial="initial"
						whileInView="vissible"
						variants={partnerVarients(i)}
						viewport={{ once: true }}
						key={item.id}>
						<Image
							src={item.src}
							alt="partners-logo"
							width={130}
							height={130}
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
}
