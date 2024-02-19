import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineEnvelope, HiCheckCircle } from "react-icons/hi2";
import isValidEmail from './../util/isValidEmail'
export default function Signup() {

    const [details, setDetails] = useState({ email: "", password: "" });

    const [code, setCode] = useState('')

    const [step, setStep] = useState(1)

    return (
        <div className="flex flex-1 h-screen overflow-hidden w-screen">
            <div className="w-2/3 items-center justify-center flex flex-col space-y-5 bg-white">
                <div className="flex flex-col-reverse items-center justify-center relative">
                    <div className="flex flex-col space-y-2 items-center justify-center">
                        <p className="text-3xl font-bold">{step==1 ? 'Create An Account.' : 'Verify Email Address'}</p>
                        <p className="text-gray-500 w-2/3 text-center text-sm"> {step==1 ? 'Fill the form to continue' : `We've sent a six digit one time password to to your email address`} <span className='text-blue-600 font-medium'>{details.email}</span></p>
                    </div>

                    <img
                        src={""}
                        alt="Eyepa Logo"
                        className="w-32 h-32  object-cover rounded-full  left-50 "
                    ></img>
                </div>
                <div className="flex items-center justify-center w-1/2 ">
                    {step == 1 && <form
                        onSubmit={e=>{e.preventDefault(); setStep(2)}}
                        action="#"
                        className="flex flex-col  justify-center items-center gap-3 w-full   p-2"
                    >
                        <div className="flex flex-row items-center border py-6 px-3 pt-7 rounded-md w-3/4 relative">
                            <HiOutlineEnvelope size={20} />
                            <input
                                onChange={(e) => setDetails(prev => ({ ...prev, email: e.target.value }))}
                                id="email"
                                className=" ml-2 focus:border-0 focus:ring-0 placeholder:text-transparent transition focus:outline-0 flex-1 peer/email"
                                type="email"
                                placeholder="Store ID"
                            />

                            {isValidEmail(details.email) && <HiCheckCircle className="border border-white h-5 w-5 text-yellow-400" />}


                            <label
                                htmlFor="email"
                                className="absolute text-gray-600 left-0 ml-9 -translate-y-5 bg-white px-1 text-xs duration-100 peer-focus/email:text-xs peer-focus/email:-translate-y-5 ease-linear peer-placeholder-shown/email:translate-y-0 peer-placeholder-shown/email:text-base peer-placeholder-shown/email:text-gray-500 "
                            >
                                Email address
                            </label>
                        </div>


                        <div className="flex flex-row items-center border py-6 px-3 pt-7 rounded-md w-3/4 relative">
                            <HiOutlineEnvelope size={20} />
                            <input
                                onChange={(e) => setDetails(prev => ({ ...prev, password: e.target.value }))}
                                id="password"
                                className=" ml-2 focus:border-0 focus:ring-0 placeholder:text-transparent transition focus:outline-0 flex-1 peer/password"
                                type="password"
                                placeholder="Store ID"
                            />
                            <label
                                htmlFor="password"
                                className="absolute text-gray-600 left-0 ml-9 -translate-y-5 bg-white px-1 text-xs duration-100 peer-focus/password:text-xs peer-focus/password:-translate-y-5 ease-linear peer-placeholder-shown/password:translate-y-0 peer-placeholder-shown/password:text-base peer-placeholder-shown/password:text-gray-500 "
                            >
                                Password
                            </label>
                        </div>


                        <div className="flex justify-between w-3/4 flex-col space-y-2 items-center mt-2">
                            <button type="submit" className="bg-yellow-500 w-full p-4 rounded-md font-medium text-white text-sm">
                                Continue
                            </button>
                            <Link to="/login" className="text-sm leading-relaxed text-gray-400">Already have an account</Link>
                        </div>
                    </form>}

                    {step == 2 && <form
                        onSubmit={null}
                        action="#"
                        className="flex flex-col  justify-center items-center gap-3 w-full   p-2"
                    >
                        <div className="flex flex-row items-center border py-6 px-3 pt-7 rounded-md w-3/4 relative">
                            <HiOutlineEnvelope size={20} />
                            <input
                                onChange={(e) => setCode(e.target.value)}
                                id="code"
                                maxLength={6}
                                className=" ml-2 focus:border-0 focus:ring-0 placeholder:text-transparent transition focus:outline-0 flex-1 peer/code"
                                type="code"
                                placeholder="Store ID"
                            />

                            <label
                                htmlFor="code"
                                className="absolute text-gray-600 left-0 ml-9 -translate-y-5 bg-white px-1 text-xs duration-100 peer-focus/code:text-xs peer-focus/code:-translate-y-5 ease-linear peer-placeholder-shown/code:translate-y-0 peer-placeholder-shown/code:text-base peer-placeholder-shown/code:text-gray-500 "
                            >
                                6 Digit Code (OTP)
                            </label>
                        </div>


                        <div className="flex justify-between w-3/4 flex-col space-y-2 items-center mt-2">
                            <button type="submit" className="bg-yellow-500 w-full p-4 rounded-md font-medium text-white text-sm">
                                Continue
                            </button>
                            <Link to="/login" className="text-sm leading-relaxed text-gray-400">Already have an account</Link>
                        </div>
                    </form>}
                </div>
            </div>
            <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1616166358812-784a766b5762?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}></div>
        </div>
    )
}
