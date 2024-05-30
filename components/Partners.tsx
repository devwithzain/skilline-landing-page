import React from "react";
import Image from "next/image";
import { partnersItem } from "@/constant";

export default function Partners() {
    return (
        <div className="w-full flex flex-col items-center gap-10 justify-center py-20">
            <h1 className="text-[28px] font-medium text-[#696984]">Trusted by 5,000+ Companies Worldwide</h1>
            <div className="w-full justify-center gap-10 flex">
                {partnersItem.map((item) => (
                    <Image
                        key={item.id}
                        src={item.src}
                        alt="partners-logo"
                    />
                ))}
            </div>
        </div>
    )
}
