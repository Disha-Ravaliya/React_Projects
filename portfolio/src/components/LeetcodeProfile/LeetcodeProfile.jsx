import React from 'react';

export default function LeetcodeProfile() {
  return (
    <div className='h-screen w-screen bg-transparent px-10 py-10'>
        <div className="leftSidePart min-w-[450px]   flex flex-wrap flex-row justify-start items-start gap-4">


    {/* scoreContainer */}
    <div className='min-w-[450px]   flex flex-wrap flex-row justify-start items-start gap-4'>

            <div className='flex flex-col sm:p-10 p-5 gap-1 '>
                <h2 className='  sm:text-5xl text-3xl text-white font-bold'> 450 <span className='text-xl text-blue-500 font-bold px-1 '><sup className='  sm:text-5xl text-3xl '>+</sup></span></h2>
                <h4 className='text-sm text-[#b3bab5] '> Lc solved</h4>

            </div>
            <div className='flex flex-col sm:p-10 gap-1 p-5  '>
                <h2 className='  sm:text-5xl text-3xl text-white font-bold'> Top 8 <span className='sm:text-5xl text-3xl text-blue-500 font-bold px-1 '> %</span></h2>
                <h4 className='text-sm text-[#b3bab5] '> Global Rank</h4>

            </div>
            <div className='flex flex-col sm:p-10 p-5 gap-1 '>
                <h2 className='  sm:text-5xl text-3xl text-white font-bold'> 3 <span className='sm:text-5xl text-3xl text-blue-500 font-bold px-1 '>x</span></h2>
                <h4 className='text-sm text-[#b3bab5] '>Contest top 500</h4>

            </div>
            <div className='flex flex-col sm:p-10 p-5 gap-1 '>
                <h2 className='  sm:text-5xl text-3xl text-white font-bold'> 60 <span className='text-xl text-blue-500 font-bold px-1 '><sup className='sm:text-5xl text-3xl'>+</sup></span></h2>
                <h4 className='text-sm text-[#b3bab5] '>Day Streak</h4>

            </div>


    </div>

{/* trackContainer */}
{/*} <h3 className=' text-sm text-white'> Leetcode Progress</h3> */}
<div className=' w-full flex flex-wrap flex-row justify-start '>


    <div className='flex flex-col text-xl text-white'>
        <div className='border border-gray-300 p-10 ml-10 '>
            <h2 className=' sm:text-5xl text-3xl font-bold '>198</h2>
            <h4 className='text-sm text-[#b3bab5] '>Easy</h4>
            <h4 className='text-sm text-[#09cb40] '>Solved</h4>

        <div className='  border border-gray-300 sm:text-3xl text-2xl text-white font-bold    '></div>


        </div>
         </div>

        <div className='border border-gray-300 p-10 ml-10 '>
            <h2 className=' sm:text-5xl text-3xl font-bold '>103</h2>
            <h4 className='text-sm text-[#b3bab5] '>Medium</h4>
            <h4 className='text-sm text-[#09cb40] '>Solved</h4>


        </div>

        <div className='border border-gray-300 p-10 ml-10 '>
            <h2 className=' sm:text-5xl text-3xl font-bold '>200</h2>
            <h4 className='text-sm text-[#b3bab5] '>Hard</h4>
            <h4 className='text-sm text-[#09cb40] '>Solved</h4>


        </div>



</div>




    <div>

</div>

    </div>






        <div className="rightSidePart"></div>
    </div>
  );
}
