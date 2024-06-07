import Image from "next/image";
import { footerLogo } from "@/public";

export default function Footer() {
	const copyWrightYear = new Date();
	return (
		<section className="w-full pt-[80px] pb-[30px] padding-x bg-[#252641]">
			<div className="w-full flex flex-col gap-4 items-center justify-center">
				<div className="flex items-center gap-8">
					<Image
						src={footerLogo}
						alt="footerLogo"
						width={120}
						height={120}
					/>
					<span className="w-[1px] h-[80px] bg-[#626381]" />
					<h2 className="paragraph text-white font-bold tracking-[0.88px]">
						Virtual Class <br /> for Zoom
					</h2>
				</div>
				<div className="flex flex-col gap-6 items-center justify-center">
					<h2 className="paragraph text-[#B2B3CF]  tracking-[1.04px]">
						Subscribe to get our Newsletter
					</h2>
					<div className="flex sm:flex-col xm:flex-col items-center gap-4 sm:items-start xm:items-start">
						<input
							type="text"
							className="w-[350px] text-[#83839A] px-[20px] py-[10px] bg-transparent rounded-full border border-[#83839A]"
							placeholder="Your Email"
						/>
						<button className="paragraph font-medium  bg-[#545AE7] text-white rounded-full px-[20px] py-[9px]">
							Subscribe
						</button>
					</div>
				</div>
				<div className="flex gap-4 flex-wrap items-center">
					<p className="text-[#B2B3CF] paragraph tracking-[0.8px] text-center sm:text-left xm:text-left">
						Careers
					</p>
					<span className="w-[1px] h-[25px] bg-[#626381]" />
					<p className="text-[#B2B3CF] paragraph tracking-[0.8px] text-center sm:text-left xm:text-left">
						Privacy Policy
					</p>
					<span className="w-[1px] h-[25px] bg-[#626381]" />
					<p className="text-[#B2B3CF] paragraph tracking-[0.8px] text-center sm:text-left xm:text-left">
						Terms & Conditions
					</p>
				</div>
				<div className="w-full flex">
					<p className="text-[#B2B3CF] paragraph tracking-[0.8px] text-center sm:text-left xm:text-left">
						© {copyWrightYear.getFullYear()} Class Technologies Inc.
					</p>
				</div>
			</div>
		</section>
	);
}
