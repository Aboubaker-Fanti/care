import React from 'react';
import BLoginHeader from "../component/BLoginheader";
import SignIn from "../component/Sign-in";

export default function Login () {
    return (
        <div className="flex flex-col h-screen">
            <BLoginHeader />
            <SignIn /> 
        </div>
    )
}

