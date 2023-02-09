import React from 'react';

import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";

const Followers = () => {
  return (
    <section className='relative z-10 max-w-7xl mx-auto py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {/* facebook card */}
        <article className='bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 rounded-lg shadow shadow-slate-50 border-t-4 border-blue-500'>
            <ul className='flex items-center justify-center text-center'>
                <li><img className='mr-2' src={facebook} alt="" /></li>
                <li className='text-sm text-slate-600 dark:text-slate-500 font-bold'>@nathanf</li>
            </ul>
            <h2 className='text-5xl font-bold text-slate-800 dark:text-white text-center my-5'>1987{" "}
                <span className='text-sm block text-slate-600 dark:text-slate-500 dont-normal uppercase tracking-widest'>
                    Followers
                </span>
            </h2>
            <p className='text-center text-emerald-600 flex items-center justify-center text-sm'>
                <img className='mr-2 w-3' src={up} alt="" />
                12 today
            </p>
        </article>
        {/* twitter card */}
        <article className='bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 rounded-lg shadow shadow-slate-50 border-t-4 border-blue-400'>
            <ul className='flex items-center justify-center text-center'>
                <li><img className='mr-2' src={twitter} alt="" /></li>
                <li className='text-sm text-slate-600 dark:text-slate-500 font-bold'>@nathanf</li>
            </ul>
            <h2 className='text-5xl font-bold text-slate-800 dark:text-white text-center my-5'>1044{" "}
                <span className='text-sm block text-slate-600 dark:text-slate-500 dont-normal uppercase tracking-widest'>
                    Followers
                </span>
            </h2>
            <p className='text-center text-emerald-600 flex items-center justify-center text-sm'>
                <img className='mr-2 w-3' src={up} alt="" />
                99 today
            </p>
        </article>
        {/* instagram card */}
        {/* had to do this to make the gradient border */}
        <div className='pt-1 rounded-lg bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500'>
            <article className='bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 rounded-lg shadow shadow-slate-50'>
                    <ul className='flex items-center justify-center text-center'>
                        <li><img className='mr-2' src={instagram} alt="" /></li>
                        <li className='text-sm text-slate-600 dark:text-slate-500 font-bold'>@realnathanf</li>
                    </ul>
                    <h2 className='text-5xl font-bold text-slate-800 dark:text-white text-center my-5'>11k{" "}
                        <span className='text-sm block text-slate-600 dark:text-slate-500 dont-normal uppercase tracking-widest'>
                            Followers
                        </span>
                    </h2>
                    <p className='text-center text-emerald-600 flex items-center justify-center text-sm'>
                        <img className='mr-2 w-3' src={up} alt="" />
                        1099 today
                    </p>            
            </article>
        </div>
        {/* youtube card */}
        <article className='bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 rounded-lg shadow shadow-slate-50 border-t-4 border-red-600'>
            <ul className='flex items-center justify-center text-center'>
                <li><img className='mr-2' src={youtube} alt="" /></li>
                <li className='text-sm text-slate-600 dark:text-slate-500 font-bold'>Nathan F.</li>
            </ul>
            <h2 className='text-5xl font-bold text-slate-800 dark:text-white text-center my-5'>8239{" "}
                <span className='text-sm block text-slate-600 dark:text-slate-500 dont-normal uppercase tracking-widest'>
                    Followers
                </span>
            </h2>
            <p className='text-center text-red-600 flex items-center justify-center text-sm'>
                <img className='mr-2 w-3' src={down} alt="" />
                144 today
            </p>
        </article>
    </section>
  )
}

export default Followers