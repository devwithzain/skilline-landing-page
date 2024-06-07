import Image from "next/image";
import {
	disscussionImg,
	feaureIcon1,
	feaureIcon2,
	feaureIcon3,
} from "@/public";

export default function OurFeature() {
	return (
		<div className="w-full flex flex-col items-center justify-center padding-y padding-x gaping">
			<div className="flex flex-col gap-4 items-center justify-center">
				<h1 className="heading font-bold text-[#F48C06]">
					<span className="heading font-bold text-[#2F327D]">Our &nbsp;</span>
					Features
				</h1>
				<p className="paragraph text-center font-normal text-[#696984]">
					This very extraordinary feature, can make learning activities more
					efficient
				</p>
			</div>
			<div className="w-full flex sm:flex-col xm:flex-col justify-between items-center gap-10">
				<div className="w-1/2 sm:w-full xm:w-full">
					<Image
						src={disscussionImg}
						alt="disscussionImg"
						width={800}
						height={400}
						className="w-full h-full"
					/>
				</div>
				<div className="w-1/2 sm:w-full xm:w-full flex flex-col justify-center gap-6">
					<h1 className="heading font-bold text-[#2F327D]">
						A&nbsp;
						<span className="heading font-bold text-[#F48C06]">
							user interface
						</span>
						&nbsp;designed for the classroom
					</h1>
					<div className="w-full flex flex-col gap-6">
						<div className="flex items-center gap-4">
							<div className="w-[60px] h-[60px] rounded-full bg-[#FBFBFB] shadow-lg flex items-center justify-center">
								<Image
									src={feaureIcon1}
									alt="featureImg"
								/>
							</div>
							<p className="paragraph tracking-[0.44px] font-normal text-[#696984]">
								Teachers don’t get lost in the grid view{" "}
								<br className="sm:hidden xm:hidden" /> and have a dedicated
								Podium space.
							</p>
						</div>
					</div>
					<div className="w-full flex flex-col gap-6">
						<div className="flex items-center gap-4">
							<div className="w-[60px] h-[60px] rounded-full bg-[#FBFBFB] shadow-lg flex items-center justify-center">
								<Image
									src={feaureIcon2}
									alt="featureImg"
								/>
							</div>
							<p className="paragraph tracking-[0.44px] font-normal text-[#696984]">
								TA’s and presenters can be moved{" "}
								<br className="sm:hidden xm:hidden" />
								to the front of the class.
							</p>
						</div>
					</div>
					<div className="w-full flex flex-col gap-6">
						<div className="flex items-center gap-4">
							<div className="w-[60px] h-[60px] rounded-full bg-[#FBFBFB] shadow-lg flex items-center justify-center">
								<Image
									src={feaureIcon3}
									alt="featureImg"
								/>
							</div>
							<p className="paragraph tracking-[0.44px] font-normal text-[#696984]">
								Teachers can easily see all students{" "}
								<br className="sm:hidden xm:hidden" />
								and class data at one time.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
