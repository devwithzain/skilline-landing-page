import Image from "next/image";
import { Button } from "@/components";
import { drive, dropbox, onedrive, team } from "@/public";

export default function Integration() {
	return (
		<div className="w-full flex flex-col items-center justify-center padding-y padding-x gaping">
			<div className="w-full flex sm:flex-col-reverse xm:flex-col-reverse justify-between items-center gap-10">
				<div className="w-1/2 sm:w-full xm:w-full flex gap-10 flex-wrap">
					<div className="w-full flex items-center justify-around gaping">
						<Image
							alt="dropbox"
							src={dropbox}
							className="w-[100px] h-[100px]"
							width={100}
							height={100}
						/>
						<Image
							alt="onedrive"
							src={onedrive}
							className="w-[100px] h-[100px]"
							width={100}
							height={100}
						/>
					</div>
					<div className="w-full flex items-center justify-around gaping">
						<Image
							alt="team"
							src={team}
							className="w-[100px] h-[100px]"
							width={100}
							height={100}
						/>
						<Image
							alt="drive"
							src={drive}
							className="w-[100px] h-[100px]"
							width={100}
							height={100}
						/>
					</div>
				</div>
				<div className="w-1/2 sm:w-full xm:w-full flex flex-col gap-4">
					<div className="flex items-center gap-3">
						<span className="w-[88px] h-[1px] bg-[#525596]" />
						<h1 className="paragraph font-normal text-[#525596] tracking-[4px]">
							INTEGRATIONS
						</h1>
					</div>
					<h1 className="heading font-bold text-[#2F327D]">
						200+ educational tools and platform &nbsp;
						<span className="heading font-bold text-[#F48C06]">
							integrations
						</span>
					</h1>
					<p className="paragraph font-normal text-[#696984]">
						Schoology has every tool your classroom needs and comes
						<br className="sm:hidden xm:hidden" />
						pre-integrated with more than 200+ tools, student information
						<br className="sm:hidden xm:hidden" />
						systems (SIS), and education platforms.
					</p>
					<Button
						title="See All Integrations"
						className="w-fit px-[20px] py-[10px] text-[#F48C06] border border-[#F48C06]"
					/>
				</div>
			</div>
		</div>
	);
}
