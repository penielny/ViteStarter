import React from 'react'
import { Link } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player';
import ladingAnim from './../assets/landing.json'

import fastIcon from "./../assets/icons/fast.png"
import easyIcon from "./../assets/icons/easy.png"
import secureIcon from "./../assets/icons/secure.png"
export default function Landing() {
    return (
        <div className='flex bg-blue-700 flex-col min-h-screen w-screen  overflow-x-hidden'>
            <div className='bg-blue-700 bg-blend-multiply bg-cover bg-center' style={{ backgroundImage: `url()` }}>
                <div className='w-full flex items-center container mx-auto'>
                    <div className='flex-1 flex items-center justify-between py-5'>
                        <h1 className='text-blue-50 text-xl font-medium'>Quick Exchange</h1>
                        <div className='flex items-center space-x-5'>
                            <Link className='text-blue-50 leading-loose' to='/login'>Login</Link>
                            <Link className='text-yellow-50 leading-loose bg-yellow-500 px-6  py-1' to='/signup'>Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
