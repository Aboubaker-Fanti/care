import React from 'react';
import BLoginHeader from "../component/BLoginheader";
import SignUp from "../component/Sign-up";

export default function Register() {
    return (
        <div className="flex flex-col h-screen">
            <BLoginHeader />
            <SignUp /> 
        </div>
    );
}
