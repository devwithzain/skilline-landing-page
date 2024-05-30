import React from "react";
import Image from "next/image";
import { instructorImg, studentImg } from "@/public";

export default function Managment() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-16 gap-24 px-36">
            <div className="flex flex-col gap-4 items-center justify-center">
                <h1 className="text-[36px] font-bold text-[#F48C06] leading-none">
                    <span className="text-[36px] font-bold text-[#2F327D] leading-none">What is
                        &nbsp;</span>
                    Skilline?
                </h1>
                <p className="text-[24px] text-center font-normal text-[#696984]">Skilline is a platform that allows educators to create online classes whereby they can <br /> store the course materials online; manage assignments, quizzes and exams; monitor <br /> due dates; grade results and provide students with feedback all in one place.</p>
            </div>
            <div className="flex items-center justify-center gap-6">
                <div className="flex flex-1 relative items-center justify-center rounded-md">
                    <Image
                        src={instructorImg}
                        alt="instructorImg"
                    />
                    <div className="absolute top-0 left-0 h-full w-full bg-[#ffffff11]"/>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10">
                        <h1 className="uppercase text-[26px] font-semibold text-white">FOR INSTRUCTORS</h1>
                        <button className='text-[18px] font-medium text-[#ffffff] border border-white rounded-full px-[30px] py-[14px] mt-5'>Start a class today</button>
                    </div>
                </div>
                <div className="flex flex-1 relative items-center justify-center rounded-md">
                    <Image
                        src={studentImg}
                        alt="instructorImg"
                    />
                    <div className="absolute top-0 left-0 h-full w-full bg-[#ffffff11]"/>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10">
                        <h1 className="uppercase text-[26px] font-semibold text-white">FOR Students</h1>
                        <button className='text-[18px] font-medium text-[#ffffff]  bg-[#23BDEE] rounded-full px-[30px] py-[14px] mt-5'>Enter access code</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
