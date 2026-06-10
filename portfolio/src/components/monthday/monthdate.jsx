// inside ../monthday/monthdate.jsx
export default function MonthDays() {
    const monthsList = [
        { name: "January", days: 31 },
        { name: "February", days: 28 },
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

    const SmallBox = () => {
        return <div className="w-2 h-2 bg-red-500 rounded-sm" />;
    };

    const fullMonthList = [];
    const month = () => {
        for (let i = 0; i < monthsList.length; i++) {
            let d = monthsList[i].days;
            let day = [];
            for (let j = 0; j < d; j++) {
                day.push(<SmallBox key={`m-${i}-d-${j}`} />);
            }
            fullMonthList.push(
                /* shrink-0 STOPs the parent from flattening your calendar blocks */
                <div key={monthsList[i].name} className='w-[100px] h-auto p-2 flex flex-col gap-2 items-center border border-neutral-800 bg-neutral-900/50 rounded shadow-sm shrink-0'>
                    <h3 className="text-[9px] font-bold text-neutral-400">{monthsList[i].name}</h3>
                    <div className="grid grid-rows-7 grid-flow-col gap-0.5">{day}</div>
                </div>
            );
        }
    };

    month();

    return (
        /* The main scroll wrapper */
        <div>
            {/* min-w-max forces this container to stretch out as far as needed horizontally */}
            <div className=" flex gap-2 justify-start items-start w-full overflow-x-auto py-2
            [&::-webkit-scrollbar]:h-2
            [&::-webkit-scrollbar-track]:bg-neutral-900
            [&::-webkit-scrollbar-thumb]:bg-neutral-700
            [&::-webkit-scrollbar-thumb]:rounded-full">
                {fullMonthList}
            </div>
        </div>
    );
}