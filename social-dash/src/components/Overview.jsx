import React from 'react'

import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";

const Overview = () => {
  return (
    <div>
      <h2 className='max-w-7xl mx-auto text-slate-500 dark:text-white text-xl font-bold'>Overview - Today</h2>
      <section className='max-w-7xl mx-auto py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {/* Facebook Page Views */}
        <article className='bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 rounded-lg shadow shadow-slate-50'>
          <ul className='flex justify-between'>
            <li className='text-slate-500 dark:text-slate-400 text-xs font-bold'>Page Views</li>
            <li><img src={facebook} alt="" /></li>
          </ul>
          <div className='flex justify-between '>
            <h2 className='text-3xl font-bold text-slate-800 dark:text-white mt-5'>87</h2>
            <p className='text-emerald-600 flex items-center justify-center text-xs'>
                <img className='mr-1' src={up} alt="" /> 3%
            </p>
          </div>
        </article>
        {/* Facebook likes */}
        <article className='bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 rounded-lg shadow shadow-slate-50'>
          <ul className='flex justify-between'>
            <li className='text-slate-500 dark:text-slate-400 text-xs font-bold'>Likes</li>
            <li><img src={facebook} alt="" /></li>
          </ul>
          <div className='flex justify-between '>
            <h2 className='text-3xl font-bold text-slate-800 dark:text-white mt-5'>52</h2>
            <p className='text-red-600 flex items-center justify-center text-xs'>
                <img className='mr-1' src={down} alt="" /> 2%
            </p>
          </div>
        </article>
        {/* Instagram likes */}
        <article className='bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 rounded-lg shadow shadow-slate-50'>
          <ul className='flex justify-between'>
            <li className='text-slate-500 dark:text-slate-400 text-xs font-bold'>Likes</li>
            <li><img src={instagram} alt="" /></li>
          </ul>
          <div className='flex justify-between '>
            <h2 className='text-3xl font-bold text-slate-800 dark:text-white mt-5'>5462</h2>
            <p className='text-emerald-600 flex items-center justify-center text-xs'>
                <img className='mr-1' src={up} alt="" /> 2257%
            </p>
          </div>
        </article>
        {/* Instagram profile views */}
        <article className='bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 rounded-lg shadow shadow-slate-50'>
          <ul className='flex justify-between'>
            <li className='text-slate-500 dark:text-slate-400 text-xs font-bold'>Profile Views</li>
            <li><img src={instagram} alt="" /></li>
          </ul>
          <div className='flex justify-between '>
            <h2 className='text-3xl font-bold text-slate-800 dark:text-white mt-5'>52k</h2>
            <p className='text-emerald-600 flex items-center justify-center text-xs'>
                <img className='mr-1' src={up} alt="" /> 1375%
            </p>
          </div>
        </article>
        {/* Twitter tweets */}
        <article className='bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 rounded-lg shadow shadow-slate-50'>
          <ul className='flex justify-between'>
            <li className='text-slate-500 dark:text-slate-400 text-xs font-bold'>Retweets</li>
            <li><img src={twitter} alt="" /></li>
          </ul>
          <div className='flex justify-between '>
            <h2 className='text-3xl font-bold text-slate-800 dark:text-white mt-5'>117</h2>
            <p className='text-emerald-600 flex items-center justify-center text-xs'>
                <img className='mr-1' src={up} alt="" /> 303%
            </p>
          </div>
        </article>
        {/* Twitter likes */}
        <article className='bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 rounded-lg shadow shadow-slate-50'>
          <ul className='flex justify-between'>
            <li className='text-slate-500 dark:text-slate-400 text-xs font-bold'>Likes</li>
            <li><img src={twitter} alt="" /></li>
          </ul>
          <div className='flex justify-between '>
            <h2 className='text-3xl font-bold text-slate-800 dark:text-white mt-5'>507</h2>
            <p className='text-emerald-600 flex items-center justify-center text-xs'>
                <img className='mr-1' src={up} alt="" /> 553%
            </p>
          </div>
        </article>
        {/* Youtube likes */}
        <article className='bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 rounded-lg shadow shadow-slate-50'>
          <ul className='flex justify-between'>
            <li className='text-slate-500 dark:text-slate-400 text-xs font-bold'>Likes</li>
            <li><img src={youtube} alt="" /></li>
          </ul>
          <div className='flex justify-between '>
            <h2 className='text-3xl font-bold text-slate-800 dark:text-white mt-5'>107</h2>
            <p className='text-red-600 flex items-center justify-center text-xs'>
                <img className='mr-1' src={down} alt="" /> 19%
            </p>
          </div>
        </article>
        {/* Youtube total views */}
        <article className='bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 rounded-lg shadow shadow-slate-50'>
          <ul className='flex justify-between'>
            <li className='text-slate-500 dark:text-slate-400 text-xs font-bold'>Total Views</li>
            <li><img src={youtube} alt="" /></li>
          </ul>
          <div className='flex justify-between '>
            <h2 className='text-3xl font-bold text-slate-800 dark:text-white mt-5'>1407</h2>
            <p className='text-red-600 flex items-center justify-center text-xs'>
                <img className='mr-1' src={down} alt="" /> 12%
            </p>
          </div>
        </article>
      </section>
    </div>
    
  )
}

export default Overview