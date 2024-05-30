import React from "react";
import Image from "next/image";
import { Navbar } from "@/components";
import { calander, email, heroImg, mark, people1, play, stats } from "@/public";

export default function Hero() {
	return (
		<div className="w-full h-[110vh] flex flex-col px-32 bg-cover bg-center bg-[url('/heroBackground.png')]">
			<Navbar />
			<div className="w-full flex justify-center h-full items-center gap-4 mb-[200px]">
				<div className="flex flex-1 flex-col gap-6">
					<h1 className="text-[54px] font-bold text-[#2F327D] leading-none">
						<span className="text-[54px] font-bold text-[#F48C06] leading-none">
							Studying&nbsp;
						</span>
						Online is now <br /> much easier
					</h1>
					<p className="text-[24px] font-normal text-[#464646]">
						Skilline is an interesting platform that will teach <br /> you in
						more an interactive way
					</p>
					<div className="flex gap-4 items-center">
						<button className="text-[18px] font-semibold bg-[#F48C06] text-white rounded-full px-[20px] py-[12px]">
							Join for free
						</button>
						<button className="flex items-center justify-center bg-white rounded-full w-[55px] h-[55px]">
							<Image
								src={play}
								alt="play"
								width={20}
								height={20}
								className="ml-[5px]"
							/>
						</button>
						<button className="text-[18px] font-normal text-[#464646]">
							Watch how it works
						</button>
					</div>
				</div>
				<div className="flex flex-1 items-center justify-center relative">
					<Image
						src={heroImg}
						alt="heroImg"
						className="w-[544px] object-cover"
					/>
					<div className="flex items-center gap-2 bg-[#ffffffe7] absolute top-1/4 left-[80px] px-4 py-3 rounded-2xl">
						<Image
							src={calander}
							alt="heroImg"
							width={50}
							height={50}
						/>
						<div>
							<p className="text-[#545567] text-[18px] font-bold">250K</p>
							<p className="text-[#545567] text-[16px] font-semibold">
								Assisted Student
							</p>
						</div>
					</div>
					<div className="absolute top-[150px] right-[80px] px-4 py-3 rounded-2xl">
						<Image
							src={stats}
							alt="heroImg"
							width={100}
							height={100}
						/>
					</div>
					<div className="flex items-center gap-2 bg-[#ffffffe7] absolute top-[45%] right-[60px] px-4 py-3 rounded-2xl">
						<Image
							src={email}
							alt="heroImg"
							width={50}
							height={50}
						/>
						<div>
							<p className="flex items-center justify-between text-[#545567] text-[18px] font-bold">
								Congratulations
								<span>
									<Image
										src={mark}
										alt="heroImg"
										width={15}
										height={15}
										className="mt-[-15px]"
									/>
								</span>
							</p>
							<p className="text-[#545567] text-[16px] font-semibold">
								Your admission completed
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-2 bg-[#ffffffe7] absolute bottom-[130px] left-[80px] px-4 py-3 rounded-2xl">
						<div className="flex items-center gap-2">
							<Image
								src={people1}
								alt="heroImg"
								width={50}
								height={50}
							/>
							<div>
								<p className="text-[#545567] text-[18px] font-bold">
									User Experience Class
								</p>
								<p className="text-[#545567] text-[16px] font-semibold">
									Today at 12.00 PM
								</p>
							</div>
						</div>
						<div className="w-full flex items-center justify-center">
							<button className="w-fit text-[14px] font-normal text-white bg-[#D8587E] px-4 rounded-full py-[4px]">
								Join Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
