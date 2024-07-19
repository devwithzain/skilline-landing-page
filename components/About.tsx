import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components";
import { TypingText } from "./custom-text";
import { staggerContainer } from "@/motion";
import { explanation, instructorImg, play, studentImg } from "@/public";

export default function About() {
	return (
		<div className="w-full flex flex-col items-center justify-center padding-y padding-x gaping">
			<div className="w-full flex flex-col gap-4 items-center sm:items-start xm:items-start justify-center">
				<motion.h1
					className="heading font-bold text-[#F48C06]"
					initial="hidden"
					whileInView="show"
					variants={staggerContainer(0.5, 0.2)}>
					<TypingText title="What is Skilline?" />
				</motion.h1>
				<p className="paragraph text-center sm:text-left xm:text-left font-normal text-[#696984]">
					Skilline is a platform that allows educators to create online classes
					whereby they can <br /> store the course materials online; manage
					assignments, quizzes and exams; monitor <br /> due dates; grade
					results and provide students with feedback all in one place.
				</p>
			</div>
			<div className="w-full sm:flex-col xm:flex-col flex items-center justify-center gap-6">
				<div className="w-1/2 sm:w-full xm:w-full flex relative items-center justify-center rounded-md">
					<Image
						src={instructorImg}
						alt="instructorImg"
						width={800}
						height={400}
						className="w-full h-full"
					/>
					<div className="w-full h-full absolute flex items-center justify-center gap-2 flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
						<h1 className="uppercase heading font-semibold text-white">
							FOR INSTRUCTORS
						</h1>
						<Button
							title="Start a class today"
							className="px-[20px] py-[10px] text-white border border-white"
						/>
					</div>
				</div>
				<div className="w-1/2 sm:w-full xm:w-full flex relative items-center justify-center rounded-md">
					<Image
						src={studentImg}
						alt="instructorImg"
						width={800}
						height={400}
						className="w-full h-full"
					/>
					<div className="w-full h-full absolute flex items-center justify-center gap-2 flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
						<h1 className="uppercase heading font-semibold text-white">
							FOR Students
						</h1>
						<Button
							title="Enter access code"
							className="px-[20px] py-[10px] text-white  bg-[#23BDEE]"
						/>
					</div>
				</div>
			</div>
			<div className="w-full flex sm:flex-col xm:flex-col items-center justify-center gap-10">
				<div className="flex flex-1">
					<div className="flex flex-col gap-4">
						<h1 className="heading font-medium text-[#2F327D]">
							Everything you can do in a physical classroom,
							<span className="heading font-medium text-[#F48C06]">
								you can do with Skilline
							</span>
						</h1>
						<p className="paragraph font-normal text-[#696984]">
							Skilline’s school management software helps traditional and online
							schools manage scheduling, attendance, payments and virtual
							classrooms all in one secure cloud-based system.
						</p>
						<button className="text-[18px] text-left underline text-[#696984]">
							Learn more
						</button>
					</div>
				</div>
				<div className="flex flex-1 relative">
					<div className="bg-[#23BDEE] rounded-2xl absolute -top-3 -left-3 -z-10 p-20" />
					<Image
						src={explanation}
						alt="instructorImg"
						width={800}
						height={400}
						className="w-full h-full"
					/>
					<div className="bg-[#F3AC50] rounded-2xl absolute -bottom-3 -right-3 -z-10 p-24" />
					<button className="absolute top-1/2  left-1/2  -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white rounded-full w-[55px] h-[55px]">
						<Image
							src={play}
							alt="play"
							width={20}
							height={20}
							className="ml-[5px]"
						/>
					</button>
				</div>
			</div>
		</div>
	);
}
