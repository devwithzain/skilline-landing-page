import Image from "next/image";
import { toolsImg } from "@/public";

export default function Tools() {
	return (
		<div className="w-full flex flex-col items-center justify-center padding-y padding-x">
			<div className="w-full flex sm:flex-col-reverse xm:flex-col-reverse justify-between items-center gaping">
				<div className="w-1/2 sm:w-full xm:w-full flex flex-col gap-4">
					<h1 className="heading font-bold text-[#F48C06]">
						Tools&nbsp;
						<span className="heading font-bold text-[#2F327D]">
							For Teachers <br /> And Learners
						</span>
					</h1>
					<p className="paragraph font-normal text-[#696984]">
						Class has a dynamic set of teaching tools built to{" "}
						<br className="sm:hidden xm:hidden" /> be deployed and used during
						class. Teachers can <br className="sm:hidden xm:hidden" /> handout
						assignments in real-time for students to{" "}
						<br className="sm:hidden xm:hidden" /> complete and submit.
					</p>
				</div>
				<div className="w-1/2 sm:w-full xm:w-full">
					<Image
						src={toolsImg}
						alt="toolsImg"
						className="w-full h-full"
						width={800}
						height={400}
					/>
				</div>
			</div>
		</div>
	);
}
