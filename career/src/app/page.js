"use client"

import Image from "next/image";
import react from "react";

import BLoginHeader from "./component/BLoginheader";
import SignIn from "./component/Sign-in";
import SignUp from "./component/Sign-up";
export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <BLoginHeader />
    </div>
  );
}



// <BLoginHeader />
// {/* <SignIn /> */}
// <SignUp />
