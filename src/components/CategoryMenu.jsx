import React,{useEffect, useState} from "react";
import FoodData from "../Data/FoodData";
import { useDispatch,useSelector } from "react-redux";
import { setCategory } from "./redux/slices/CategorySlice";

function CategoryMenu () {
    const [categories, setCategories] = useState([]);

    let dispatch = useDispatch();
    let selectedCategory = useSelector((state) => state.category.category);

    const listUniqueCategories = () =>{
        const uniqueCategories = [
          ...new  Set(FoodData.map((food) => food.category))];
        setCategories(uniqueCategories);
        console.log(uniqueCategories);
    }

    useEffect( () => {
        listUniqueCategories();
    },[])

    return(
        <>
        <div className="mx-6">
            <h3 className="text-xl font-semibold">Find the best Food</h3>
            <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth">
               

            <button 
                    onClick={() => dispatch(setCategory("All"))}
                    className={`px-3 py-2 bg-gray-300 font-bold rounded-lg
                     hover:bg-green-500 hover:text-white 
                     ${selectedCategory === "All" && "bg-green-500 text-white"}`}>
                   All
                </button>
              
              {
                categories.map((category, index) => {
                    return (
                      <button key={index}
                    onClick={() => dispatch(setCategory(category))}
                    className={`px-3 py-2 bg-gray-300 font-bold rounded-lg
                      hover:bg-green-500 hover:text-white 
                      ${selectedCategory === category && "bg-green-500 text-white"}`}>
                    {category}
                </button>
                    )
                })
              }
            </div>
        </div>
        
        </>
    )
}
export default CategoryMenu;