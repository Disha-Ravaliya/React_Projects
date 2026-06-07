import React from "react";

export default function LeetcodeProfile() {
    return (
        <div className="min-h-screen w-screen bg-transparent px-6 py-10 md:px-10">
            <div className="leftSidePart max-w-[550px] flex flex-col gap-6">

                {/* scoreContainer */}
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-md flex flex-wrap flex-row justify-start gap-y-6 gap-x-4 sm:gap-x-8 text-white">

                    {/* LC Solved */}
                    <div className="flex flex-col w-[100px] sm:w-[110px] tracking-tight">
                        <h2 className="text-3xl sm:text-4xl font-black text-white/90 flex items-baseline">
                            450<span className="text-lg sm:text-xl text-blue-500 font-bold ml-0.5">+</span>
                        </h2>
                        <div className="mt-1">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#b3bab5]">Lc Solved</h4>
                        </div>
                    </div>

                    {/* Global Rank */}
                    <div className="flex flex-col w-[100px] sm:w-[110px] tracking-tight">
                        <h2 className="text-3xl sm:text-4xl font-black text-white/90 flex items-baseline">
                            Top 8<span className="text-lg sm:text-xl text-blue-500 font-bold ml-0.5">%</span>
                        </h2>
                        <div className="mt-1">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#b3bab5]">Global Rank</h4>
                        </div>
                    </div>

                    {/* Contest Top 500 */}
                    <div className="flex flex-col w-[100px] sm:w-[110px] tracking-tight">
                        <h2 className="text-3xl sm:text-4xl font-black text-white/90 flex items-baseline">
                            3<span className="text-lg sm:text-xl text-blue-500 font-bold ml-1">x</span>
                        </h2>
                        <div className="mt-1">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#b3bab5]">Contest Top 500</h4>
                        </div>
                    </div>

                    {/* Day Streak */}
                    <div className="flex flex-col w-[100px] sm:w-[110px] tracking-tight">
                        <h2 className="text-3xl sm:text-4xl font-black text-white/90 flex items-baseline">
                            60<span className="text-lg sm:text-xl text-blue-500 font-bold ml-0.5">+</span>
                        </h2>
                        <div className="mt-1">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#b3bab5]">Day Streak</h4>
                        </div>
                    </div>
                </div>

                {/* trackContainer (Modified strictly with flex structures) */}
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-md flex flex-wrap flex-row justify-start gap-y-6 text-white">

                    {/* Core Row - Holds Easy, Medium, Hard together using flex */}
                    <div className="w-full flex flex-row justify-between sm:justify-start gap-x-6 sm:gap-x-10">
                        <div className="flex flex-col w-24 sm:w-28 tracking-tight">
                            <h2 className="text-3xl sm:text-5xl font-black text-white/90">198</h2>
                            <div className="mt-1">
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#b3bab5]">Easy</h4>
                                <h4 className="text-xs font-medium text-[#09cb40]/90 mt-0.5">Solved</h4>
                            </div>
                        </div>

                        <div className="flex flex-col w-24 sm:w-28 tracking-tight">
                            <h2 className="text-3xl sm:text-5xl font-black text-white/90">103</h2>
                            <div className="mt-1">
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f5a106]">Medium</h4>
                                <h4 className="text-xs font-medium text-[#09cb40]/90 mt-0.5">Solved</h4>
                            </div>
                        </div>

                        <div className="flex flex-col w-24 sm:w-28 tracking-tight">
                            <h2 className="text-3xl sm:text-5xl font-black text-white/90">200</h2>
                            <div className="mt-1">
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f63a05]">Hard</h4>
                                <h4 className="text-xs font-medium text-[#09cb40]/90 mt-0.5">Solved</h4>
                            </div>
                        </div>
                    </div>

                    {/* Full width divider line to isolate the elements cleanly */}
                    <div className="w-full border-t border-neutral-800/60 my-1"></div>

                    {/* Bottom Topics Row wrapping dynamically */}
                    <div className="w-full flex flex-wrap flex-row justify-start gap-y-8 gap-x-6 sm:gap-x-10">
                        <div className="text-sm w-[130px] sm:w-[140px] font-medium text-purple-400">
                            Dynamic <span className="block">Programming</span>
                            <span className="block text-xs font-normal text-[#a69c9a] mt-1">450+ problems</span>
                        </div>

                        <div className="text-sm w-[130px] sm:w-[140px] font-medium text-[#7bfb49]">
                            Trees <span className="block">& Graphs</span>
                            <span className="block text-xs font-normal text-[#a69c9a] mt-1">60+ problems</span>
                        </div>

                        <div className="text-sm w-[130px] sm:w-[140px] font-medium text-[#efbb1f]">
                            Two Pointers
                            <span className="block text-xs font-normal text-[#a69c9a] mt-6">60+ problems</span>
                        </div>

                        <div className="text-sm w-[130px] sm:w-[140px] font-semibold text-[#ff00ee]">
                            Contest Rating
                            <span className="block text-xs font-normal text-[#a69c9a] mt-6">1,820 — Knight</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="rightSidePart"></div>
        </div>
    );
}