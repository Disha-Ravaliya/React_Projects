import React from 'react';

export default function LandingPage() {
    return (
        // Changed to min-h-screen, added gap-12, changed items-start to items-center
        <div className='min-h-screen w-full bg-black flex flex-col justify-center items-center sm:flex-row px-6 sm:px-10 py-12 gap-12'>

            {/* Left Side: Removed hardcoded mt-30 and h-full so it naturally centers */}
            <div className='leftSidepart w-full sm:w-1/2 flex flex-col justify-center items-start gap-5'>

                {/* top badge - added flex-wrap */}
                <div className="flex flex-wrap items-center gap-3 px-6 py-2.5 bg-[#030712]/60 border border-sky-500/20 rounded-md font-mono text-sm font-semibold text-sky-300 tracking-[0.2em] mb-4 sm:mb-10">
                    <span className="w-2 h-2 mr-1 bg-sky-300 rounded-full shadow-[0_0_8px_#7dd3fc]" />
                    <span>PROBLEM SOLVER</span> <span className="text-sky-500/40">•</span>
                    <span>REACT LEARNER</span> <span className="text-sky-500/40">•</span>
                    <span>DSA GRINDER</span>
                </div>

                {/* ( the big name) */}
                <div className='text-white'>
                    <h2 className='bg-gradient-to-r text-5xl from-blue-500 to-orange-500 bg-clip-text text-transparent pb-6'>
                        Disha <span className='block text-white'> Ravaliya</span>
                    </h2>
                </div>

                {/* detail paragraph */}
                <p className='text-[#989493]'>
                    CS student with a <span className='text-white font-bold'>strong foundation in algorithms & data structures. </span>
                    Now turning that analytical brain toward building real products with React. I solve problems for fun — the coding kind.
                </p>

                {/* visit button - added flex-wrap */}
                <div className="flex flex-wrap gap-4 p-4 bg-[#030712] font-mono text-sm text-white mt-4 rounded-xl">
                    <button className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-xl bg-white/5 hover:bg-white/10">
                        <span>🐚 View projects ↗</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-xl text-white/80 hover:border-white/30">
                        <span> LeetCode profile</span>
                    </button>
                </div>
            </div>

            {/* Right Side: Removed mt-28 */}
            <div className='rightSidepart w-full sm:w-1/2 h-auto flex flex-col justify-center items-center gap-5'>
                {/* Changed p-15 to p-8 sm:p-12 for valid Tailwind spacing */}
                <div
                    style={{
                        background: `
              radial-gradient(circle at 15% 0%, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 25%, transparent 55%),
              radial-gradient(circle at 85% 15%, rgba(236, 72, 153, 0.35) 0%, rgba(236, 72, 153, 0.1) 25%, transparent 55%),
              radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.35) 0%, rgba(168, 85, 247, 0.1) 30%, transparent 60%),
              linear-gradient(135deg, #040308 0%, #010102 100%)
            `,
                    }}
                    className='flex flex-col h-full w-full max-w-lg p-8 sm:p-12 rounded-xl text-white gap-7 border border-white/10'
                >
                    <div className='flex flex-row justify-between'>
                        <div className='border border-pink-300 p-2 rounded'>Algorithm</div>
                        <div className='border border-pink-300 p-2 rounded'>ID : RD-2026</div>
                    </div>

                    <div className='w-full flex justify-center items-center'>
                        {/* Fixed `class` to `className` */}
                        <div className="w-[150px] h-[150px] border-4 border-dotted border-blue-500 rounded-[50%] p-6 text-center mt-10 bg-transparent"></div>
                    </div>

                    <div className='info flex flex-col h-auto w-full'>
                        <div className='text-4xl font-bold'>
                            <h2>Software Engineer</h2>
                            <h4 className='text-sm font-light mt-6'>Building scalable systems & algorithms.</h4>
                        </div>

                        {/* Changed flex-row to flex-col sm:flex-row so boxes stack nicely on tiny phones */}
                        <div className='flex flex-col sm:flex-row justify-between mt-7 gap-4'>
                            <div className='border border-white/20 text-4xl flex flex-col justify-between p-4 w-full rounded-lg'>
                                <h4 className='text-sm font-light text-gray-400'>Focus</h4>
                                <h3 className='text-xl mt-2'>C++ / DSA</h3>
                            </div>

                            <div className='border border-white/20 text-4xl flex flex-col justify-between p-4 w-full rounded-lg'>
                                <h4 className='text-sm font-light text-gray-400'>Favourite</h4>
                                <h3 className='text-xl mt-2'>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}