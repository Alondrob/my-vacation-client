import React from "react";
import { useDispatch } from "react-redux";
import { advanceSearch } from "../../features/misc-slices/searchSlice";
const SearchPopUp = () => {
  const dispatch = useDispatch();
  return (
    <div className=" flex justify-center items-center fixed    ">
      

            <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                          <button onClick={() => dispatch(advanceSearch())}>
                              x
                          </button>
            </span>
     
    </div>
  );
};

export default SearchPopUp;
