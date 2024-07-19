"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Navbar } from "@/components";
import { calander, email, heroImg, mark, people1, play, stats } from "@/public";
import { heroTextVarients, scaleInVarients } from "@/motion";

export default function Hero() {
	return (
		<div className="w-full h-screen flex flex-col padding-x bg-cover bg-center bg-[#FFF2E1] rounded-b-[100%]">
			<Navbar />
			<div className="w-full flex sm:flex-col xm:flex-col justify-center items-center gap-6">
				<div className="flex w-1/2 sm:w-full xm:w-full flex-col gap-6 mt-10 overflow-hidden">
					<motion.h1
						initial="initial"
						animate="animate"
						variants={heroTextVarients}
						className="heading font-bold text-[#2F327D]">
						<span className="heading font-bold text-[#F48C06]">
							Studying&nbsp;
						</span>
						Online <br />
						is now much easier
					</motion.h1>
					<motion.p
						className="paragraph font-normal text-[#464646]"
						initial="initial"
						animate="animate"
						variants={heroTextVarients}>
						Skilline is an interesting platform that will teach{" "}
						<br className="sm:hidden xm:hidden" /> you in more an interactive
						way
					</motion.p>
					<motion.div
						className="flex gap-4 items-center"
						initial="initial"
						animate="animate"
						variants={heroTextVarients}>
						<Button
							title="Join for free"
							className="bg-[#F48C06] text-white px-[20px] py-[5px]"
						/>
						<button className="flex items-center justify-center bg-white rounded-full w-[55px] h-[55px]">
							<Image
								src={play}
								alt="play"
								width={20}
								height={20}
								className="ml-[5px]"
							/>
						</button>
						<Button
							title="Watch how it works"
							className="text-[#464646] px-[20px] py-[5px]"
						/>
					</motion.div>
				</div>
				<div className="flex w-1/2 sm:w-full xm:w-full items-center justify-center relative">
					<motion.div
						initial="initial"
						animate="animate"
						variants={scaleInVarients(1.3)}>
						<Image
							src={heroImg}
							alt="heroImg"
							width={800}
							height={400}
							className="w-[544px] h-full object-cover"
						/>
					</motion.div>
					<motion.div
						className="flex items-center gap-2 bg-[#ffffffe7] absolute top-1/4 left-[40px] px-4 py-3 rounded-2xl sm:hidden xm:hidden"
						initial="initial"
						animate="animate"
						variants={scaleInVarients(1.6)}>
						<Image
							src={calander}
							alt="heroImg"
							width={50}
							height={50}
						/>
						<div>
							<p className="text-[#545567] paragraph font-bold">250K</p>
							<p className="text-[#545567] paragraph font-semibold">
								Assisted Student
							</p>
						</div>
					</motion.div>
					<motion.div
						className="absolute top-[100px] right-[80px] px-4 py-3 rounded-2xl sm:hidden xm:hidden"
						initial="initial"
						animate="animate"
						variants={scaleInVarients(1.9)}>
						<Image
							src={stats}
							alt="heroImg"
							width={100}
							height={100}
						/>
					</motion.div>
					<motion.div
						className="flex items-center gap-2 bg-[#ffffffe7] absolute top-[50%] right-[-20px] px-4 py-3 rounded-2xl sm:hidden xm:hidden"
						initial="initial"
						animate="animate"
						variants={scaleInVarients(2.2)}>
						<Image
							src={email}
							alt="heroImg"
							width={50}
							height={50}
						/>
						<div>
							<p className="flex items-center justify-between text-[#545567] paragraph font-bold">
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
							<p className="text-[#545567] paragraph font-semibold">
								Your admission completed
							</p>
						</div>
					</motion.div>
					<motion.div
						className="flex flex-col gap-2 bg-[#ffffffe7] absolute bottom-[100px] left-[-20px] px-4 py-3 rounded-2xl sm:hidden xm:hidden"
						initial="initial"
						animate="animate"
						variants={scaleInVarients(2.5)}>
						<div className="flex items-center gap-2">
							<Image
								src={people1}
								alt="heroImg"
								width={50}
								height={50}
							/>
							<div>
								<p className="text-[#545567] paragraph font-bold">
									User Experience Class
								</p>
								<p className="text-[#545567] paragraph font-semibold">
									Today at 12.00 PM
								</p>
							</div>
						</div>
						<div className="w-full flex items-center justify-center">
							<Button
								title="Join Now"
								className="text-white bg-[#D8587E] px-[20px] py-[5px]"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
