import React from "react";
import Image from "next/image";
import { partnersItem } from "@/constant";

export default function Partners() {
	return (
		<div className="w-full flex flex-col items-center gap-10 justify-center padding-y padding-x">
			<h1 className="paragraph font-medium text-[#696984]">
				Trusted by 5,000+ Companies Worldwide
			</h1>
			<div className="w-full justify-center gap-10 flex flex-wrap">
				{partnersItem.map((item) => (
					<Image
						key={item.id}
						src={item.src}
						alt="partners-logo"
						width={130}
						height={130}
					/>
				))}
			</div>
		</div>
	);
}
