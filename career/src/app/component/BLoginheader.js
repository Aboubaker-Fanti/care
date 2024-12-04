import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import { FaCircleUser } from "react-icons/fa6";

export default function BLoginHeader() {
    return (
        <>
            <div className="flex items-center px-20 p-4 justify-between bg-white text-black">
                <div className="flex items-center justify-evenly w-1/2">
                    <h1 className="text-[21px] font-extrabold">Carrier</h1>
                    <div className="flex relative">
                        <input type="search" id="site-search" name="search" placeholder="search..."  
                            className="pl-10 py-2 pr-4 rounded-full bg-[#F0F2F4]  "
                        />
                        
                        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                    </div>
                </div>

                <div className="flex items-center justify-evenly w-1/4">
                    <FaCircleUser className="text-[21px]"  />

                    <IoMdHome className="text-[21px]" />
                    <IoIosNotifications className="text-[21px]" />
                    <h1 className="text-[21px] font-extrabold "><Link href="/login">Sign Up/In</Link> </h1>
                </div>

            </div>
        </>
    )
}

// npm install react-icons --save
