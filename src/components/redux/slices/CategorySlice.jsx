import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
    name: "category",
    initialState: {
        category : "All",
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
            console.log(action.payload);
            
        }
    }

});

export const {setCategory} = CategorySlice.actions;
export default CategorySlice.reducer;