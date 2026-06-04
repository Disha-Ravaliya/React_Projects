import React from 'react';

export default function LandingPage() {
  return (
    <div className='w-screen h-screen bg-black flex flex-col justify-center items-start sm:flex-row px-10 '>
          <div className='leftSidepart w-full h-full flex flex-col justify-start items-start mt-30 smaa:w-1/2 gap-5'>
            {/* top badge */}
              <div className="flex items-center gap-3 px-6 py-2.5 bg-[#030712]/60 border border-sky-500/20 rounded-md font-mono text-sm font-semibold text-sky-300 tracking-[0.2em] mb-10">
                  <span className="w-2 h-2 mr-1 bg-sky-300 rounded-full shadow-[0_0_8px_#7dd3fc]" />
                  <span>PROBLEM SOLVER</span> <span className="text-sky-500/40">•</span>
                  <span>REACT LEARNER</span>  <span className="text-sky-500/40">•</span>
                  <span>DSA GRINDER</span>
              </div>


              {/* ( the big name) */}
              <div className='text-white'>
                  <h2 className='bg-gradient-to-r text-5xl from-blue-500 to-orange-500 bg-clip-text text-transparent pb-6 '> Disha
                      <span className='block text-white'> Ravaliya</span></h2>
              </div>

              {/* detail paragraph */}

              <p className='text-[#989493]  ' >
                  CS student with a <span className='text-white font-bold'>strong foundation in algorithms & data structures.
                  </span> Now turning that analytical brain toward building real products with React. I solve problems for fun — the coding kind.
              </p>

              {/* visit button */}
              <div className="flex gap-4 p-4 bg-[#030712] font-mono text-sm text-white mt-4">
                  <button className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-xl bg-white/5 hover:bg-white/10">
                      <span>🐚 View projects ↗</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-xl text-white/80 hover:border-white/30">
                      <span> LeetCode profile</span>
                  </button>
              </div>
     </div>
    <div className='rightSidepart w-full h-auto flex flex-col justify-start items-start mt-28 sm:w-1/2 gap-5' >
  {/* Fixed color shade, added padding for readability */}
  <div style={{ background: `
  radial-gradient(circle at 15% 0%, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 25%, transparent 55%),
  radial-gradient(circle at 85% 15%, rgba(236, 72, 153, 0.35) 0%, rgba(236, 72, 153, 0.1) 25%, transparent 55%),
  radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.35) 0%, rgba(168, 85, 247, 0.1) 30%, transparent 60%),
  linear-gradient(135deg, #040308 0%, #010102 100%)
`}} className='flex flex-col h-full w-full  p-15 rounded-lg text-white gap-7'>
      {/* Fixed spelling and updated border color contrast */}
      <div className='flex flex-row justify-between  '>
        <div className='border border-pink-300 p-2 rounded'>Algorithm</div>

        <div className='border border-pink-300 p-2 rounded'>ID : RD-2026</div>
      </div>
    <div className='w-full flex justify-center items-center'>
        <div class=" w-[150px] h-[150px] border-4 border-dotted border-blue-500 rounded-[50%] p-6  text-center mt-10 bg-transparent">

    </div>
    </div>

    <div className='info flex  flex-col h-auto w-full'>
        <div className=' text-4xl font-bold '>
           <h2> Software Engineer</h2>
           <h4 className='text-sm font-light mt-6'> Building scalable systems & algorithms.</h4>

        </div>
        <div className='flex flex-row justify-between mt-7 px-4 gap-8'>
            <div className=' border text-4xl flex flex-col justify-between p-4 w-full'>
                <h4 className='  text-sm font-light '>Focus </h4>
                <h3 className='text-xl'> c++ / DSA </h3>
            </div>

            <div className=' border text-4xl flex flex-col justify-between p-4 w-full'>
                <h4 className='  text-sm font-light '>Favourite  </h4>
                <h3 className='text-xl'> Java Script </h3>
            </div>

        </div>


    </div>


      </div>

  </div>
</div>

  );
}
