import React from "react";

const SignIn = () => {
    return ( 
        <>
            <div className="mt-10 w-screen min-h-screen flex items-center justify-center bg-gray-50  px-4 sm:px-6 lg:px-8">
                <div className="relative py-3 sm:max-w-md sm:mx-auto">
                    <div className="min-h-96 px-12 py-8 mt-4 text-left bg-white rounded-xl shadow-lg">
                        <div className="flex flex-col justify-center items-center h-full select-none">
                            <div className="flex flex-col items-center justify-center gap-2 mb-8">
                                <a href="https://amethgalarcio.web.app/" target="_blank" rel="noopener noreferrer">
                                    <img src="plastic-bottle-2-svgrepo-com (1).svg" className="w-36" alt="Logo" />
                                </a>
                                <p className="m-0 text-[18px] font-semibold dark:text-white">Sign in to your Account</p>
                                <span className="m-0 text-sm max-w-[90%] text-center text-[#8B8E98]">
                                    Welcome back! Please enter your details to sign in.
                                </span>
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label className="font-semibold text-xs text-gray-400">Email</label>
                                <input className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 " placeholder="Email" />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="font-semibold text-xs text-gray-400">Password</label>
                            <input type="password" className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 " placeholder="••••••••" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="font-semibold text-xs text-gray-400">Confrim Password</label>
                            <input type="password" className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 " placeholder="••••••••" />
                        </div>
                        <div className="mt-5">
                            <button className="mb-5 py-2 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">Sign In</button>
                            <a href="/login">
                            <button className="py-2 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">Login</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default SignIn;
