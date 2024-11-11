import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

function AppDownload() {
  return (
    <div className='app-download m-auto mt-24 text-center font-semibold' id='app-download'>
      <p className='text-xl md:text-3xl'>For Better Experience Download <br className='hidden md:block' /> Tomato App</p>
      <div className="app-download-platform flex justify-center gap-4 mt-10 flex-wrap">
        <img
          className='w-[90px] md:w-[120px] max-w-[150px] md:max-w-[180px] transition-all duration-300 cursor-pointer hover:scale-105'
          src={assets.play_store}
          alt=""
        />
        <img
          className='w-[90px] md:w-[120px] max-w-[150px] md:max-w-[180px] transition-all duration-300 cursor-pointer hover:scale-105'
          src={assets.app_store}
          alt=""
        />
      </div>
    </div>
  );
}

export default AppDownload;