"use client";

import React from "react";
import { useState } from 'react';
import Link from "next/link";


export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
      const handleSubmit = async (e) => {



            e.preventDefault();
            console.log(password, "   ", username)
            
            // try {
            //   const response = await axios.post('https://example.com/api/login', {
            //     email,
            //     password,
            //   });
        
            //     localStorage.setItem('token', response.data.token);
            // } catch (err) {
            //   console.error('Login error:', err);
            // }
                




    };
    return (
        <>
            <div className="h-full  text-black flex flex-col justify-center items-center  bg-[#F4F2EE]">
                <div className="py-6 px-3 bg-[#D9D9D9] w-[270px] rounded-xl ">
                    <p className="text-[19px] font-bold p-2">Sign in</p>
                    <p className="text-[10px] pl-2 mb-6">Stay updated on your professional world.</p>
                    <form  onSubmit={handleSubmit} className="flex flex-col mb-1 ">
                        <input 
                            type="Username"
                            value={username}
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className=" m-2 border-[1px] pl-2 py-1  border-[#3E3E3E]"
                            style={{ boxShadow: "0 2px 0px rgba(0, 0, 0, 0.4)" }}

                        />
                        <input 
                            type="Password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className=" m-2 border-[1px] pl-2 py-1 border-[#3E3E3E] mb-5"
                            style={{ boxShadow: "0 2px 0px rgba(0, 0, 0, 0.4)" }}

                        />
                        <button type="submit" className="bg-[#2A4A86]  p-2 m-2 rounded-[15px] text-white text-[15px] " >Sign In</button>
                    </form>
                    <h1 className="flex justify-center">or</h1>
                    <button className="flex  bg-[#2A4A86] justify-center p-2 m-2 w-[230px] rounded-[15px] text-white text-[15px] ">continue with google</button>
                </div>
                <p className="text-[13px] p-3 ">don't have an account? <span className="text-[#4749C0]"><Link href="/register">Join now</Link> </span></p>
            </div>
        </>
    )
}