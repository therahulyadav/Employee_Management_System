function EmployeeDashboard(){
    return(
        <>
        <div className="bg-[#1d1c1c] h-screen p-5 ">
        <section className="flex  justify-between">
            <div className="text-white">
            <div className="text-2xl font-semibold">Hello,</div>
            <div className="text-4xl font-bold">Rahul 👋</div>
            </div>
            <div className="self-end">
            <button className="text-white bg-[#d04335] rounded px-2 py-1 font-semibold">Log Out</button>
            </div>
        </section>
        <section className="grid grid-cols-4 gap-5  my-5 ">
        <div className="bg-[#3a89e9] rounded  col-span-2 p-4 sm:col-span-1 ">
            <div className="text-white font-bold text-4xl">0</div>
            <div  className="text-white font-bold text-3xl">New Task</div>
        </div>
        <div  className="bg-[#a1c566] p-4 rounded  col-span-2 sm:col-span-1 ">
            <div className="text-white font-bold text-4xl">3</div>
            <div className="text-white font-bold text-3xl ">Completed</div>
        </div>
        <div  className="bg-[#fad24d] p-4 rounded col-span-2 sm:col-span-1 ">
            <div className=" font-bold text-4xl">0</div>
            <div className=" font-bold text-3xl">Accepted</div>
        </div>
        <div  className="bg-[#d16f46] p-4 rounded col-span-2 sm:col-span-1 ">
            <div className="text-white font-bold text-4xl">1</div>
            <div className="text-white font-bold text-3xl">Failed</div>
        </div>
        </section>
        <section id="no-scrollbar" className="flex flex-nowrap overflow-y-scroll rounded-xl gap-5 sm:overflow-x-auto ">
        <div  className="bg-[#d16f46] p-4   w-full shrink-0 rounded">
            <div className="flex justify-between">
            <button className="text-white bg-[#d04335] rounded px-2 py-1 font-bold text-xs">High</button>
            <div  className="text-white font-semibold">20 Feb 2024</div>
            </div>
            <div>
                <div className="text-white font-semibold text-xl">Example Task</div>
                <div className="text-white font-semibold">Task jaisa kabhi nahi dekha hoga waisa</div>
            </div>
        </div>
        <div  className="bg-[#fad24d] p-4   w-full shrink-0 rounded">
            <div className="flex justify-between">
            <button className="text-white bg-[#d04335] rounded px-2 py-1 font-bold text-xs">High</button>
            <div  className="text-white font-semibold">20 Feb 2024</div>
            </div>
            <div>
                <div className="text-white font-semibold text-xl">Example Task</div>
                <div className="text-white font-semibold">Task jaisa kabhi nahi dekha hoga waisa</div>
            </div>
        </div>
        <div  className="bg-[#3a89e9] p-4   w-full shrink-0 rounded">
            <div className="flex justify-between">
            <button className="text-white bg-[#d04335] rounded px-2 py-1 font-bold text-xs">High</button>
            <div  className="text-white font-semibold">20 Feb 2024</div>
            </div>
            <div>
                <div className="text-white font-semibold text-xl">Example Task</div>
                <div className="text-white font-semibold">Task jaisa kabhi nahi dekha hoga waisa</div>
            </div>
        </div>
        <div  className="bg-[#a1c566] p-4   w-full shrink-0 rounded">
            <div className="flex justify-between">
            <button className="text-white bg-[#d04335] rounded px-2 py-1 font-bold text-xs">High</button>
            <div  className="text-white font-semibold">20 Feb 2024</div>
            </div>
            <div>
                <div className="text-white font-semibold text-xl">Example Task</div>
                <div className="text-white font-semibold">Task jaisa kabhi nahi dekha hoga waisa</div>
            </div>
        </div>
        </section>
        </div>
        </>
    )
}
export default EmployeeDashboard