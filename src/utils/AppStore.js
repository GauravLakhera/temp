import {configureStore} from "@reduxjs/toolkit"
import updateValueSlice from "./updateValue"
const appStore =configureStore({
  reducer:{count:updateValueSlice}  
})
export default appStore