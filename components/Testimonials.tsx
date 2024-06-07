import Image from "next/image";
import { star, testimonials } from "@/public";
import Button from "./Button";

export default function Testimonials() {
	return (
		<div className="w-full flex flex-col items-center justify-center padding-x padding-y gaping">
			<div className="w-full flex sm:flex-col xm:flex-col justify-between items-center gap-10">
				<div className="w-1/2 sm:w-full xm:w-full flex flex-col gap-4">
					<div className="flex items-center gap-3">
						<span className="w-[88px] h-[1px] bg-[#525596]" />
						<h1 className="paragraph font-normal text-[#525596] tracking-[4px]">
							TESTIMONIAL
						</h1>
					</div>
					<h1 className="heading font-bold text-[#2F327D]">What They Say?</h1>
					<div className="flex flex-col gap-4">
						<p className="paragraph font-normal text-[#696984]">
							Skilline has got more than 100k positive
							<br className="sm:hidden xm:hidden" /> ratings from our users
							around the world.
						</p>
						<p className="paragraph font-normal text-[#696984]">
							Some of the students and teachers were
							<br className="sm:hidden xm:hidden" /> greatly helped by the
							Skilline.
						</p>
						<p className="paragraph font-normal text-[#696984]">
							Are you too? Please give your assessment
						</p>
					</div>
					<Button
						title="Write your assessment"
						className="w-fit px-[20px] py-[10px] text-[#F48C06] border border-[#F48C06]"
					/>
				</div>
				<div className="w-1/2 sm:w-full xm:w-full flex gap-10 flex-wrap relative">
					<Image
						alt="testimonials"
						src={testimonials}
						width={800}
						height={400}
						className="w-full h-full rounded-2xl sm:hidden xm:hidden"
					/>
					<div className="w-full absolute flex flex-col gap-4 rounded-2xl bg-white shadow-md p-[20px] bottom-[10%] before:bg-black">
						<div className="w-full flex gap-4 items-center">
							<span className="w-[2px] h-[140px] bg-[#BDBDD1]" />
							<p className="paragraph font-normal text-[#5F5F7E] tracking-[0.44px]">
								&quot;Thank you so much for your help. It&apos;s exactly what
								I&apos;ve been looking for. You won&apos;t regret it. It really
								saves me time and effort. Skilline is exactly what our business
								has been lacking.&quot;
							</p>
						</div>
						<div className="w-full flex items-center justify-between gap-2">
							<h1 className="paragraph text-[#5F5F7E]">Gloria Rose</h1>
							<div className="flex flex-col gap-2">
								<Image
									alt="star"
									src={star}
									width={40}
									height={40}
									className="w-full"
								/>
								<p className="paragraph font-normal text-[#5F5F7E] tracking-[0.44px]">
									12 reviews at Yelp
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
