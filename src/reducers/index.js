import { combineReducers } from "redux";
import { addSubRedFunc } from "./addSubReducer";
import { MulDivRedFunc } from "./mulDivReducer";
export default combineReducers(
    {
        //1.p:v

        //2methods
        addSubRedFunc:addSubRedFunc,
        MulDivRedFunc:MulDivRedFunc
        
    }
)