import Image from "next/image";
import { assignmentsImg } from "@/public";

export default function Assignments() {
	return (
		<div className="w-full flex flex-col items-center justify-center padding-y padding-x">
			<div className="w-full flex sm:flex-col xm:flex-col justify-between items-center gaping">
				<div className="w-1/2 sm:w-full xm:w-full">
					<Image
						alt="toolsImg"
						src={assignmentsImg}
						className="w-full h-full"
					/>
				</div>
				<div className="w-1/2 sm:w-full xm:w-full flex flex-col gap-4">
					<h1 className="heading font-bold text-[#2F327D]">
						Assessments,
						<br />
						<span className="heading font-bold text-[#F48C06]">Quizzes,</span>
						Tests
					</h1>
					<p className="paragraph font-normal text-[#696984]">
						Easily launch live assignments, quizzes, and
						<br className="sm:hidden xm:hidden" /> tests. Student results are
						automatically entered in <br className="sm:hidden xm:hidden" /> the
						online gradebook.
					</p>
				</div>
			</div>
		</div>
	);
}
