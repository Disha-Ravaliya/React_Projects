import React from "react";
import MonthDays from "../monthday/monthdate";
import leetImage from "../../assets/leet.png";

export default function LeetcodeProfile() {
    return (
        <div className="min-h-screen w-full px-4 py-20 md:px-10 flex flex-col justify-center gap-12 md:gap-16 items-start">

            {/* Top Section */}
            <div className="w-full flex flex-col lg:flex-row gap-8 items-start lg:items-stretch">
                <div className="w-full lg:flex-1 flex justify-center items-center min-h-[250px]">
                    <img 
                        src={leetImage} 
                        alt="LeetCode" 
                        className="max-w-full h-auto max-h-[350px] object-contain drop-shadow-2xl mix-blend-screen" 
                    />
                </div>
                {/* Top Left (Stats) */}
                <div className="w-full lg:w-[450px] flex flex-col gap-6 shrink-0">
                    {/* scoreContainer */}
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-md flex flex-wrap flex-row justify-start gap-y-6 gap-x-4 sm:gap-x-8 text-white">
                        <div className="flex flex-col w-[100px] sm:w-[110px] tracking-tight">
                            <h2 className="text-3xl sm:text-4xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 flex items-baseline">450<span className="text-lg sm:text-xl text-blue-500 font-bold ml-0.5">+</span></h2>
                            <h4 className="text-xs font-jakarta font-semibold uppercase tracking-wider text-zinc-400 mt-1">Lc Solved</h4>
                        </div>
                        <div className="flex flex-col w-[100px] sm:w-[110px] tracking-tight">
                            <h2 className="text-3xl sm:text-4xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 flex items-baseline">Top 8<span className="text-lg sm:text-xl text-orange-500 font-bold ml-0.5">%</span></h2>
                            <h4 className="text-xs font-jakarta font-semibold uppercase tracking-wider text-zinc-400 mt-1">Global Rank</h4>
                        </div>
                        <div className="flex flex-col w-[100px] sm:w-[110px] tracking-tight">
                            <h2 className="text-3xl sm:text-4xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 flex items-baseline">3<span className="text-lg sm:text-xl text-indigo-500 font-bold ml-1">x</span></h2>
                            <h4 className="text-xs font-jakarta font-semibold uppercase tracking-wider text-zinc-400 mt-1">Contest Top 500</h4>
                        </div>
                        <div className="flex flex-col w-[100px] sm:w-[110px] tracking-tight">
                            <h2 className="text-3xl sm:text-4xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 flex items-baseline">60<span className="text-lg sm:text-xl text-teal-500 font-bold ml-0.5">+</span></h2>
                            <h4 className="text-xs font-jakarta font-semibold uppercase tracking-wider text-zinc-400 mt-1">Day Streak</h4>
                        </div>
                    </div>

                    {/* trackContainer */}
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-md flex flex-col gap-y-6 text-white h-full">
                        <div className="w-full flex flex-row justify-between sm:justify-start gap-x-6 sm:gap-x-10">
                            <div className="flex flex-col w-24 sm:w-28 tracking-tight">
                                <h2 className="text-3xl sm:text-5xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">198</h2>
                                <h4 className="text-xs font-jakarta font-bold uppercase tracking-wider text-[#09cb40] mt-1 drop-shadow-sm">Easy</h4>
                            </div>
                            <div className="flex flex-col w-24 sm:w-28 tracking-tight">
                                <h2 className="text-3xl sm:text-5xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">103</h2>
                                <h4 className="text-xs font-jakarta font-bold uppercase tracking-wider text-[#f5a106] mt-1 drop-shadow-sm">Medium</h4>
                            </div>
                            <div className="flex flex-col w-24 sm:w-28 tracking-tight">
                                <h2 className="text-3xl sm:text-5xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">200</h2>
                                <h4 className="text-xs font-jakarta font-bold uppercase tracking-wider text-[#f63a05] mt-1 drop-shadow-sm">Hard</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top Right (Image) */}
                
            </div>

            {/* Bottom Row (MonthDays) */}
            <div className="w-full min-w-0 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-md text-white mt-4">
                <h3 className="text-sm font-jakarta font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Submission Activity
                </h3>
                <div className="w-full min-h-[200px]">
                    <MonthDays />
                </div>
            </div>

        </div>
    );
}