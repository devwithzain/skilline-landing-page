import Image from "next/image";
import { managementImg } from "@/public";

export default function Management() {
	return (
		<div className="w-full flex flex-col items-center justify-center padding-y padding-x">
			<div className="w-full flex justify-between items-center gaping sm:flex-col-reverse xm:flex-col-reverse">
				<div className="w-1/2 sm:w-full xm:w-full flex flex-col gap-4">
					<h1 className="heading font-bold text-[#F48C06]">
						Class Management
						<br />
						<span className="heading font-bold text-[#2F327D]">
							Tools for Educators
						</span>
					</h1>
					<p className="paragraph font-normal text-[#696984]">
						Class provides tools to help run and manage the class
						<br className="sm:hidden xm:hidden" /> such as Class Roster,
						Attendance, and more. With the
						<br className="sm:hidden xm:hidden" /> Gradebook, teachers can
						review and grade tests and <br className="sm:hidden xm:hidden" />
						quizzes in real-time.
					</p>
				</div>
				<div className="w-1/2 sm:w-full xm:w-full">
					<Image
						alt="managementImg"
						src={managementImg}
						className="w-full h-full"
						width={800}
						height={400}
					/>
				</div>
			</div>
		</div>
	);
}
