import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    theme: localStorage.getItem("theme") || "light",

}
export const darkSlices = createSlice({
    name: 'dark',
    initialState,
    reducers: {

        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light"
            localStorage.setItem("theme", state.theme);
        },
        setDark: (state) => {
            state.theme = "dark"
            localStorage.setItem("theme", state.theme);
        },
        setLight: (state) => {
            state.theme = "light"
            localStorage.setItem("theme", state.theme);
        }
    }
})

export const { toggleTheme, setDark, setLight } = darkSlices.actions
export default darkSlices.reducer