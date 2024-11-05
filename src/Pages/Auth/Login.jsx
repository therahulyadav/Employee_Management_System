export default function Login(){
    return(
        <div className='bg-[#1d1c1c] h-screen p-3'>
            <div className='text-3xl font-bold text-white'>Log In</div>
            <div  className="flex justify-center items-center h-full">
            <form className="w-[90%] sm:w-[30%]">
            <div>
                <input type="email" className="outline-none border placeholder:pl-[4px]  border-2 w-full border-[#8d3b43] p-2 rounded-full bg-[#1d1c1c] text-white " placeholder="Email" ></input>
            </div>
            <div>
                <input type="password" className="outline-none w-full placeholder:pl-[4px] border border-2 border-[#8d3b43]  p-2 rounded-full bg-[#1d1c1c] mt-6 mb-2 text-white " placeholder="Password" ></input>
            </div>
            <div className="flex justify-between w-full p-3">
                <div  >
                    <label className="text-gray-400 ">  <input className="appearance-none w-3 h-3 border border-gray-400 rounded-sm bg-bg-[#1d1c1c]  cursor-pointer  checked:bg-[#8d3b43]" type="checkbox"></input>  Remember me</label>
                </div>
                <div className="text-[#8d3b43] cursor-pointer ">
                Forget Password
                </div>
            </div>
            <button type="submit" className="w-full  p-2 rounded-full bg-[#8d3b43] text-white font-semibold mt-5">Log In</button>
            </form>
            </div>
            </div>
    )
}