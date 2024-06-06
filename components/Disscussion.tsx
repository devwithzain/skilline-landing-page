import Image from "next/image";
import { Button } from "@/components";
import { disscussionImg } from "@/public";

export default function Management() {
	return (
		<div className="w-full flex flex-col items-center justify-center padding-y padding-x">
			<div className="w-full flex sm:flex-col xm:flex-col justify-between items-center gaping">
				<div className="w-1/2 sm:w-full xm:w-full">
					<Image
						alt="disscussionImg"
						src={disscussionImg}
						width={800}
						height={400}
						className="w-full h-full"
					/>
				</div>
				<div className="w-1/2 sm:w-full xm:w-full flex flex-col gap-4">
					<h1 className="heading font-bold text-[#2F327D]">
						One-on-One
						<br />
						<span className="heading font-bold text-[#F48C06]">
							Discussions
						</span>
					</h1>
					<p className="paragraph font-normal text-[#696984]">
						Teachers and teacher assistants can talk with{" "}
						<br className="sm:hidden xm:hidden" /> students privately without
						leaving the Zoom <br className="sm:hidden xm:hidden" /> environment.
					</p>
				</div>
			</div>
			<Button
				title="See more features"
				className="px-[20px] py-[10px] mt-[30px] text-[#F48C06] border border-[#F48C06]"
			/>
		</div>
	);
}
