import React from "react";
import Image from "next/image";
import { featuresItem } from "@/constant";

export default function Features() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-16 gap-24 px-36">
            <div className="flex flex-col gap-4 items-center justify-center">
                <h1 className="text-[36px] font-bold text-[#F48C06] leading-none">
                    <span className="text-[36px] font-bold text-[#2F327D] leading-none">All-In-One &nbsp;</span>
                    Cloud Software.
                </h1>
                <p className="text-[24px] text-center font-normal text-[#696984]">Skilline is one powerful online software suite that combines
                    <br />all the tools needed to run a successful school or office.</p>
            </div>
            <div className="flex items-center justify-center gap-6">
                {featuresItem.map((item) => (
                    <div className="w-[380px] h-[380px] bg-white shadow-2xl rounded-2xl px-6 py-24 relative" key={item.id}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Image
                                src={item.src}
                                alt="img"
                                width={120}
                                height={120}
                                className=""
                            />
                        </div>
                        <div className="">
                            <h1 className="text-[30px] text-center mb-4 font-medium text-[#2F327D] leading-none">
                                {item.title}
                            </h1>
                            <p className="text-[20px] text-center font-normal text-[#696984]">{item.para}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
