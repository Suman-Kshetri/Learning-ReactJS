import { createContext, useContext } from "react";

export const ThemeContext = createContext(
    {
        themeMode: "light",
        darkTheme: () => { },
        lightTheme: () => { }
    }
);
//default value is given or not no errror will be shown

//creating a provider component to wrap the whole app
export const ThemeProvider = ThemeContext.Provider;


//no need to import useContext because we are using it in the same file 
export default function useTheme() {
    return useContext(ThemeContext);
}