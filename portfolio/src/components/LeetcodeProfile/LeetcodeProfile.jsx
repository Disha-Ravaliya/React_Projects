import React from "react";
import MonthDays from "../monthday/monthdate";

export default function LeetcodeProfile() {
    return (
        <div className="min-h-screen w-full bg-zinc-950 px-4 py-10 md:px-10 flex flex-col lg:flex-row gap-8 items-start">

            {/* Left Column (Stats) */}
            <div className="w-full lg:w-[450px] flex flex-col gap-6 shrink-0">
                {/* scoreContainer */}
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-md flex flex-wrap flex-row justify-start gap-y-6 gap-x-4 sm:gap-x-8 text-white">
                    <div className="flex flex-col w-[100px] sm:w-[110px] tracking-tight">
                        <h2 className="text-3xl sm:text-4xl font-black text-white/90 flex items-baseline">450<span className="text-lg sm:text-xl text-blue-500 font-bold ml-0.5">+</span></h2>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#b3bab5] mt-1">Lc Solved</h4>
                    </div>
                    <div className="flex flex-col w-[100px] sm:w-[110px] tracking-tight">
                        <h2 className="text-3xl sm:text-4xl font-black text-white/90 flex items-baseline">Top 8<span className="text-lg sm:text-xl text-blue-500 font-bold ml-0.5">%</span></h2>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#b3bab5] mt-1">Global Rank</h4>
                    </div>
                    <div className="flex flex-col w-[100px] sm:w-[110px] tracking-tight">
                        <h2 className="text-3xl sm:text-4xl font-black text-white/90 flex items-baseline">3<span className="text-lg sm:text-xl text-blue-500 font-bold ml-1">x</span></h2>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#b3bab5] mt-1">Contest Top 500</h4>
                    </div>
                    <div className="flex flex-col w-[100px] sm:w-[110px] tracking-tight">
                        <h2 className="text-3xl sm:text-4xl font-black text-white/90 flex items-baseline">60<span className="text-lg sm:text-xl text-blue-500 font-bold ml-0.5">+</span></h2>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#b3bab5] mt-1">Day Streak</h4>
                    </div>
                </div>

                {/* trackContainer */}
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-md flex flex-col gap-y-6 text-white">
                    <div className="w-full flex flex-row justify-between sm:justify-start gap-x-6 sm:gap-x-10">
                        <div className="flex flex-col w-24 sm:w-28 tracking-tight">
                            <h2 className="text-3xl sm:text-5xl font-black text-white/90">198</h2>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#09cb40] mt-1">Easy</h4>
                        </div>
                        <div className="flex flex-col w-24 sm:w-28 tracking-tight">
                            <h2 className="text-3xl sm:text-5xl font-black text-white/90">103</h2>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f5a106] mt-1">Medium</h4>
                        </div>
                        <div className="flex flex-col w-24 sm:w-28 tracking-tight">
                            <h2 className="text-3xl sm:text-5xl font-black text-white/90">200</h2>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f63a05] mt-1">Hard</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column (Calendar wrapper)
                🔥 CRITICAL: `min-w-0` and `w-full` combined allow this container
                to scale down and let the calendar scroll freely inside it.
            */}
            <div className="w-full min-w-0 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-md text-white">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#b3bab5] mb-4">Submission Activity</h3>
                <MonthDays />
            </div>

        </div>
    );
}