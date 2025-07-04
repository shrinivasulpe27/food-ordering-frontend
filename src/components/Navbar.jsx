import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "./redux/slices/SearchSlice";

function Navbar () {
    const dispatch = useDispatch()

    return(
        <>
        
        <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3 mb-10">
            <div className="">
                <h3 className="text-xl font-bold text-gray-500">{ new Date().toUTCString().slice(0,16)}</h3>
                <h1 className="text-2xl font-bold">AROMA</h1>
            </div>
            <div>
                <input 
                type="search" name="search" id="" 
                placeholder="Search here" 
                autoComplete="off"
                onChange={(e)=>dispatch(setSearch(e.target.value))}
                className="p-3 border-gray-600 border-2  text-sm rounded-lg outline-none w-full"
                />
            </div>
        </nav>
        </>
    )
}
export default Navbar;