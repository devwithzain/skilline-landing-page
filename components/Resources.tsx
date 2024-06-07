import {
	resourcesImg1,
	resourcesImg2,
	resourcesImg3,
	resourcesImg4,
} from "@/public";
import Image from "next/image";
import { Button } from "@/components";

export default function Resources() {
	return (
		<div className="w-full flex flex-col items-center justify-center padding-y padding-x gaping">
			<div className="flex flex-col gap-4 items-center justify-center">
				<h1 className="heading font-bold text-[#2F327D]">
					Lastest News and Resources
				</h1>
				<p className="paragraph text-center sm:text-left xm:text-left font-normal text-[#696984]">
					See the developments that have occurred to Skillines in the world
				</p>
			</div>
			<div className="w-full flex sm:flex-col xm:flex-col gap-10">
				<div className="w-[40%] sm:w-full xm:w-full flex flex-col gap-4">
					<Image
						src={resourcesImg1}
						alt="resourcesImg1"
						width={800}
						height={400}
						className="w-full h-full"
					/>
					<div className="w-full flex flex-col gap-4">
						<Button
							title="news"
							className="w-fit bg-[#F4C467] text-[#252641] tracking-[0.4px] px-[20px] py-[5px] uppercase"
						/>
						<h4 className="text-[26px] leading-[46px] font-medium text-[#252641]">
							Class adds $30 million to its balance sheet for
							<br className="sm:hidden xm:hidden" /> a Zoom-friendly edtech
							solution
						</h4>
						<p className="text-[20px] tracking-[0.4px] leading-[36px] font-normal text-[#696984]">
							Class, launched less than a year ago by Blackboard
							<br className="sm:hidden xm:hidden" />
							co-founder Michael Chasen, integrates exclusively...
						</p>
						<Button
							title="Learn more"
							className="text-[20px] text-left underline text-[#696984]"
						/>
					</div>
				</div>
				<div className="w-[60%] sm:w-full xm:w-full flex flex-col gap-6">
					<div className="w-full flex sm:flex-col xm:flex-col gap-6">
						<div className="relative w-full">
							<Image
								src={resourcesImg2}
								alt="resourcesImg2"
								width={800}
								height={400}
								className="w-full h-full"
							/>
							<Button
								title="PRESS RELEASE"
								className="absolute bottom-[10px] right-[10px] bg-[#F4C467] text-[#252641] tracking-[0.4px] px-[20px] py-[5px] uppercase"
							/>
						</div>
						<div className="flex flex-col gap-4">
							<h4 className="text-[24px] font-medium text-[#252641]">
								Class Technologies Inc. Closes $30 Million
								<br className="sm:hidden xm:hidden" /> Series A Financing to
								Meet High Demand
							</h4>
							<p className="text-[20px] tracking-[0.4px] leading-[36px] font-normal text-[#696984]">
								Class Technologies Inc., the company that
								<br className="sm:hidden xm:hidden" /> created Class,...
							</p>
						</div>
					</div>
					<div className="w-full flex sm:flex-col xm:flex-col gap-6">
						<div className="relative w-full">
							<Image
								src={resourcesImg3}
								alt="resourcesImg3"
								width={800}
								height={400}
								className="w-full h-full"
							/>
							<Button
								title="news"
								className="absolute bottom-[10px] right-[10px] bg-[#F4C467] text-[#252641] tracking-[0.4px] px-[20px] py-[5px] uppercase"
							/>
						</div>
						<div className="flex flex-col gap-4">
							<h4 className="text-[24px] font-medium text-[#252641]">
								Zoom’s earliest investors are betting
								<br className="sm:hidden xm:hidden" /> millions on a better Zoom
								for schools
							</h4>
							<p className="text-[20px] tracking-[0.4px] leading-[36px] font-normal text-[#696984]">
								Zoom was never created to be a consumer
								<br className="sm:hidden xm:hidden" /> product. Nonetheless,
								the...
							</p>
						</div>
					</div>
					<div className="w-full flex sm:flex-col xm:flex-col items-center gap-6">
						<div className="relative w-full">
							<Image
								src={resourcesImg4}
								alt="resourcesImg4"
								width={800}
								height={400}
								className="w-full h-full"
							/>
							<Button
								title="news"
								className="absolute bottom-[10px] right-[10px] bg-[#F4C467] text-[#252641] tracking-[0.4px] px-[20px] py-[5px] uppercase"
							/>
						</div>
						<div className="flex flex-col gap-4">
							<h4 className="text-[24px] font-medium text-[#252641]">
								Former Blackboard CEO Raises $16M to
								<br className="sm:hidden xm:hidden" /> Bring LMS Features to
								Zoom Classrooms
							</h4>
							<p className="text-[20px] tracking-[0.4px] leading-[36px] font-normal text-[#696984]">
								This year, investors have reaped big
								<br className="sm:hidden xm:hidden" /> financial returns from
								betting on Zoom...
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
