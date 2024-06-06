import React from "react";
import Image from "next/image";
import { featuresItem } from "@/constant";

export default function Features() {
	return (
		<div className="w-full flex flex-col items-center justify-center padding-y padding-x gaping">
			<div className="flex flex-col gap-4 items-center justify-center">
				<h1 className="heading font-bold text-[#F48C06]">
					<span className="heading font-bold text-[#2F327D]">
						All-In-One &nbsp;
					</span>
					Cloud Software.
				</h1>
				<p className="paragraph text-center sm:text-left xm:text-left font-normal text-[#696984]">
					Skilline is one powerful online software suite that combines
					<br className="sm:hidden xm:hidden" />
					all the tools needed to run a successful school or office.
				</p>
			</div>
			<div className="flex sm:flex-col xm:flex-col items-center justify-center gap-10">
				{featuresItem.map((item) => (
					<div
						className="w-[400px] h-[450px] sm:w-full xm:w-full sm:h-full xm:h-full bg-white shadow-2xl rounded-2xl px-6 py-24 relative"
						key={item.id}>
						<div className="sm:hidden xm:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
							<Image
								src={item.src}
								alt={item.title}
								width={120}
								height={120}
								className="w-full h-full"
							/>
						</div>
						<div>
							<h1 className="text-[30px] text-center font-medium text-[#2F327D]">
								{item.title}
							</h1>
							<p className="paragraph text-center font-normal text-[#696984]">
								{item.para}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
