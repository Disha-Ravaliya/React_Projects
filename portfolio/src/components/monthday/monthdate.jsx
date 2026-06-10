import React, { useMemo } from "react";

export default function MonthDays() {
    const monthsList = [
        { name: "January", days: 31 },
        { name: "February", days: 28 }, // Note: 2026 is a non-leap year
        { name: "March", days: 31 },
        { name: "April", days: 30 },
        { name: "May", days: 31 },
        { name: "June", days: 30 },
        { name: "July", days: 31 },
        { name: "August", days: 31 },
        { name: "September", days: 30 },
        { name: "October", days: 31 },
        { name: "November", days: 30 },
        { name: "December", days: 31 },
    ];

     
    const SmallBox = ({ submissions }) => {
      
        let bgClass = "bg-neutral-800";  

        if (submissions > 0 && submissions <= 2) {
            bgClass = "bg-emerald-900";  
        } else if (submissions > 2 && submissions <= 5) {
            bgClass = "bg-emerald-700";  
        } else if (submissions > 5) {
            bgClass = "bg-emerald-500";  
        }

        return (
            <div 
                className={`w-2 h-2 ${bgClass} rounded-[1px] transition-colors duration-200 hover:bg-green-400 cursor-pointer`}
                title={`${submissions} submissions`} 
            />
        );
    };

    
    const fullMonthList = useMemo(() => {
        const generatedMonths = [];

        for (let i = 0; i < monthsList.length; i++) {
            const totalDays = monthsList[i].days;
            const dayElements = [];

            for (let j = 0; j < totalDays; j++) {
                const hasSubmissions = Math.random() > 0.4;
                const submissionCount = hasSubmissions ? Math.floor(Math.random() * 8) : 0;

                dayElements.push(
                    <SmallBox 
                        key={`m-${i}-d-${j}`} 
                        submissions={submissionCount} 
                    />
                );
            }

            generatedMonths.push(
                <div 
                    key={monthsList[i].name} 
                    className='w-[100px] h-auto p-2 flex flex-col gap-2 items-center border border-neutral-800/60 bg-neutral-900/50 rounded shadow-sm shrink-0'
                >
                    <h3 className="text-[10px] font-bold text-neutral-400 tracking-wide">{monthsList[i].name}</h3>
                    <div className="grid grid-rows-7 grid-flow-col gap-[2px]">
                        {dayElements}
                    </div>
                </div>
            );
        }

        return generatedMonths;
    }, []);  

    return (
        <div className="flex gap-2 justify-start items-start w-full overflow-x-auto py-2
            [&::-webkit-scrollbar]:h-2
            [&::-webkit-scrollbar-track]:bg-neutral-950
            [&::-webkit-scrollbar-thumb]:bg-neutral-800
            [&::-webkit-scrollbar-thumb]:rounded-full">
            {fullMonthList}
        </div>
    );
}