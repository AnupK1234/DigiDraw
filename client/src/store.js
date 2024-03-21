import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./slice/menuSlice.js";
import ToolboxReducer from "./slice/toolboxSlice.js";

export const store = configureStore({
  reducer: {
    menu: MenuReducer,
    toolbox: ToolboxReducer,
  },
});
