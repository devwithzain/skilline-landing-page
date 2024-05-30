import React from "react";
import Image from "next/image";
import { explanation, instructorImg, play, studentImg } from "@/public";

export default function About() {
    return (
        <div className="w-[90%] mx-auto flex flex-col items-center justify-center py-16 gap-24 px-36">
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
                    <div className="absolute top-0 left-0 h-full w-full bg-[#ffffff11]" />
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
                    <div className="absolute top-0 left-0 h-full w-full bg-[#ffffff11]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10">
                        <h1 className="uppercase text-[26px] font-semibold text-white">FOR Students</h1>
                        <button className='text-[18px] font-medium text-[#ffffff]  bg-[#23BDEE] rounded-full px-[30px] py-[14px] mt-5'>Enter access code</button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-10">
                <div className="flex flex-1">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[36px] font-medium text-[#2F327D]">Everything you can do in a physical classroom, <span className="text-[36px] font-medium text-[#F48C06]">you can do with Skilline</span></h1>
                        <p className="text-[24px] font-normal text-[#696984]">Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                        <button className='text-[18px] text-left underline text-[#696984]'>Learn more</button>
                    </div>
                </div>
                <div className="flex flex-1 relative">
                    <div className="bg-[#23BDEE] rounded-2xl absolute -top-3 -left-3 -z-10 p-20" />
                    <Image
                        src={explanation}
                        alt="instructorImg"
                    />
                    <div className="bg-[#F3AC50] rounded-2xl absolute -bottom-3 -right-3 -z-10 p-24" />
                    <button className='absolute top-1/2  left-1/2  -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white rounded-full w-[55px] h-[55px]'>
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
    )
}
