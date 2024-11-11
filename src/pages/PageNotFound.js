import React from 'react'
import pagenotfound from '../assets/pagenotfound.png'
import { Link } from 'react-router-dom'
import { Button } from '../components'
import { useEffect } from 'react';

export function PageNotFound(props) {
    useEffect(() => {
        document.title = `404 Not Found/Cinemate`;
    })

    return (
        <main>
            <section className='flex flex-col justify-center px-2'>
                <div className='flex flex-col items-centre my-4'>
                    <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
                        OOPS! Page Not Found
                    </p>
                    <div className='max-w-lg'>
                        <img className='rounded' src={pagenotfound} alt='404 Not Found'></img>
                    </div>
                </div>
                <div className='flex justify-center my-4'>
                    <Link to="/">
                        <Button>Back To Cinemate</Button>
                    </Link>
                </div>
            </section >
        </main>
    )
}
