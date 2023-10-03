import React from "react";
import Image from "next/image";

export default function ChannelCard({channel}){


    return (
        <>

            <div className=" first:mt-5 min-w-[240px] bg-muzical_secondary_low rounded-md p-2 border-4 border-dashed shadow-xl border-muzical_secondary md:hover:-translate-y-6">
                <a href="#" className = "w-full  ">
                    <Image className="w-full mb-4 rounded-md object-cover" width = {100} height = {100} src={`${channel.image}`} alt="product image" />
                </a>
                <div className="flex flex-col justify-end items-center w-full">
                    <h3 className="text-xl font-semibold tracking-tight text-muzical_primary mb-8">{channel.name}</h3>
                    <div className="flex w-full items-center justify-between">
                        <a href={`${channel.link}`} className="w-full" >
                            <span className="text-md block text-center w-full text-muzical_primary p-2 rounded-md bg-muzical_secondary hover:bg-muzical_primary hover:text-muzical_secondary font-semibold">Join Room</span>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}