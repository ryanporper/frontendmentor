import React, { useState } from 'react';

const Header = () => {
  const [toggleDark, setToggleDark] = useState(false);

  const handleToggleDarkMode = () => {
    const body = document.querySelector("body");

    if(toggleDark) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
    setToggleDark(!toggleDark);
  }

  return (
    <header className='relative z-10 max-w-7xl mx-auto flex items-center justify-between'>
      <div>
        <h1 className="font-bold text-2xl text-slate-800 dark:text-white">Social Media Dashboard</h1>
        <p className="text-slate-500 dark:text-slate-400 font-bold">Total Followers: 23,004</p>
      </div>
      {/* Dark mode Toggle */}
      <div class="flex justify-end">
        <label for="toggleB" class="flex items-center cursor-pointer">
          <div class="mr-3 text-slate-400 dark:text-white text-xs font-bold">
            Dark Mode
          </div>
          <div class="relative">
            <input type="checkbox" id="toggleB" class="sr-only" checked={!toggleDark} onChange={handleToggleDarkMode} />
            <div class="block bg-gray-300 w-12 h-7 rounded-full"></div>
            <div class="dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition"></div>
          </div>
        </label>
      </div>
    </header>
  )
}

export default Header